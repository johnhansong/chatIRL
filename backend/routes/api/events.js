const { Op } = require('sequelize');
const express = require('express')
const sequelize = require('sequelize')

const router = express.Router();

const { User, Event, Group, Attendance, Venue, Image } = require('../../db/models');

// express validation
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const {
    handleValidationErrors,
    groupExistsValidation,
    venueExistsValidation,
    eventExistsValidation,
    validateDates,
    isOrgValidation,
    isHostValidation,
    isAttendeeValidation
} = require('../../utils/validation');

const validateEvent = [
    check('name')
        .exists({checkFalsy: true})
        .isLength({min: 5})
        .withMessage('Name must be at least 5 characters'),
    check('type')
        .exists({checkFalsy: true})
        .isIn(['Online', 'In person'])
        .withMessage("Type must be 'Online' or 'In person'"),
    check('capacity')
        .exists({checkFalsy: true})
        .isInt({min: 0})
        .withMessage("Capacity must be an integer"),
    check('price')
        .exists({checkFalsy: true})
        .isFloat({min: 0})
        .withMessage("Price is invalid"),
    check('description')
        .exists({checkFalsy: true})
        .withMessage("Description is required"),
    handleValidationErrors
]

//Get all Events
router.get(
    '/',
    async (req, res, next) => {
    let events = await Event.findAll({
        include: [
            {
                model: Attendance,
                attributes: [],
                where: {status: "attending"},
                required: false
            },
            {
                model: Image, as: 'EventImages',
                attributes: [],
                where: {
                    imageableType: 'Event',
                    preview: true
                },
                required: false
            },
            {
                model: Group,
                attributes: ['id', 'name', 'city', 'state']
            },
            {
                model: Venue,
                attributes: ['id', 'city', 'state']
            }
        ],
        attributes: {
            include: [[sequelize.fn("COUNT", sequelize.col('Attendances.id')), "numAttending"],
                        [sequelize.col("EventImages.imageURL"), 'previewImage']],
            exclude: ['createdAt', 'updatedAt']
        },
        group: ['Event.id', 'EventImages.imageURL', 'Group.id', 'Venue.id']
    });
    res.status(200).json({Events: events})
});

//Get details of an Event specified by its id
router.get(
    '/:eventId',
    eventExistsValidation,
    async (req, res, next) => {
        const eventDetails = await Event.findByPk(req.params.eventId, {
            include: [
                {
                    model: Attendance,
                    attributes: [],
                    where: {status: "attending"},
                    required: false
                },
                {
                    model: Image, as: 'EventImages',
                    attributes: [],
                    where: {
                        imageableType: 'Event',
                        preview: true
                    },
                    required: false
                },
                {
                    model: Group,
                    attributes: ['id', 'name', 'city',  'state']
                },
                {
                    model: Venue,
                    attributes: ['id', 'city', 'state']
                }
            ],
            attributes: {
                include: [[sequelize.fn("COUNT", sequelize.col('Attendances.id')), "numAttending"],
                            [sequelize.col("EventImages.imageURL"), 'previewImage']],
                exclude: ['createdAt', 'updatedAt']
            }

        })
    res.status(200).json(eventDetails)
    }
)


//Add an Image to an Event based on the Event's id
router.post(
    '/:eventId/images',
    requireAuth, eventExistsValidation,
    [isHostValidation || isAttendeeValidation],
    async (req, res, next) => {
        const { url, preview } = req.body;
        let currEvent = await Event.findByPk(req.params.eventId)

        const eventImg = await Image.create({
            imageableId: req.params.eventId,
            imageURL: url,
            preview
        });

        const safeImg = {
            id: eventImg.id,
            url: eventImg.imageURL,
            preview: eventImg.preview
        }
    return res.status(200).json(safeImg)
    }
)

//Edit an Event specified by its id
router.put(
    '/:eventId',
    requireAuth, eventExistsValidation, venueExistsValidation,
    validateEvent, [isOrgValidation || isHostValidation],
    async (req, res, next) => {
        let currEvent = await Event.findByPk(req.params.eventId)

        const {
            venueId, name, type, capacity, price,
            description, startDate, endDate
        } = req.body;
        currEvent.set({
            venueId, name, type, capacity, price,
            description, startDate, endDate
        })
        currEvent = await currEvent.save();

        const safeEvent = {
            id: currEvent.id,
            groupId: currEvent.groupId,
            venueId: currEvent.venueId,
            name: currEvent.name,
            type: currEvent.type,
            capacity: currEvent.capacity,
            price: currEvent.price,
            description: currEvent.description,
            startDate: currEvent.startDate,
            endDate: currEvent.endDate
        }
        res.status(200).json(safeEvent);
    }
)

module.exports = router;
