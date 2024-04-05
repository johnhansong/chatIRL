const { Op } = require('sequelize');
const express = require('express')
const sequelize = require('sequelize')

const router = express.Router();

const { User, Event, Group, Attendance, Membership, Venue, Image } = require('../../db/models');

// express validation
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const {
    handleValidationErrors,
    venueExistsValidation,
    eventExistsValidation,
    isAttendeeValidation,
    validateDates,
    isOrgOrHostEvent,
    isPartOfEvent,
    isAttending,
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
    validateDates,
    handleValidationErrors
]

const validatePagination = [
    check('page')
        .optional()
        .isInt({min: 1})
        .withMessage("Page must be greater than or equal to 1"),
    check('size')
        .optional()
        .isInt({min: 1, max: 20})
        .withMessage("Size must be between 1 and 20"),
    check('name')
        .optional()
        .isString()
        .withMessage("Name must be a string"),
    check('type')
        .optional()
        .isIn(['Online', 'In Person'])
        .withMessage("Type must be 'Online' or 'In Person'"),
    check('startDate')
        .optional()
        .isDate()
        .withMessage("Start date must be a valid datetime"),
    handleValidationErrors
]

//Get all Events
router.get(
    '/',
    validatePagination,
    async (req, res, next) => {

    let pagination = {}
    const page = req.query.page === undefined ? 1 : parseInt(req.query.page);
	const size = req.query.size === undefined ? 20 : parseInt(req.query.size);
	if (page >= 1 && size >= 1) {
		pagination.limit = size;
		pagination.offset = size * (page - 1);
	}

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
            },
        ],
        attributes: {
            include: [[sequelize.fn("COUNT", sequelize.col('Attendances.id')), "numAttending"],
                        [sequelize.col("EventImages.imageURL"), 'previewImage']],
            exclude: ['createdAt', 'updatedAt']
        },
        group: ['Event.id', 'EventImages.imageURL', 'Group.id', 'Venue.id'],
    });

    res.status(200).json({"Events": events.splice(pagination.offset, pagination.limit)})
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
                            [sequelize.col("EventImages.imageURL"), 'previewImage'],
                        'description',
                        ],
                exclude: ['createdAt', 'updatedAt']
            },
            group: ['Event.id', 'EventImages.imageURL', 'Group.id', 'Venue.id']
        })
    res.status(200).json(eventDetails)
    }
)


//Add an Image to an Event based on the Event's id
router.post(
    '/:eventId/images',
    requireAuth, eventExistsValidation, isPartOfEvent,
    async (req, res, next) => {
        const { url, preview } = req.body;
        let currEvent = await Event.findByPk(req.params.eventId)

        const eventImg = await Image.create({
            imageableId: parseInt(req.params.eventId),
            imageableType: 'Event',
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
    requireAuth, venueExistsValidation, eventExistsValidation,
    validateEvent, isOrgOrHostEvent,
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

//Delete an Event specified by its id
router.delete(
    '/:eventId',
    requireAuth, eventExistsValidation,
    isOrgOrHostEvent,
    async (req, res, next) => {
        let currEvent = await Event.findByPk(req.params.eventId)
        await currEvent.destroy();
        res.status(200)
        res.json({"message": "Successfully deleted"})
    }
)

//Get all Attendees of an Event specified by its id
router.get(
    '/:eventId/attendees',
    eventExistsValidation,
    async (req, res, next) => {
        const currEvent = await Event.findByPk(req.params.eventId)
        const currGroup = await Group.findByPk(currEvent.groupId)
        const currMember = await Membership.findOne({
            where: {    groupId: currGroup.id,
                        userId: req.user.id},
        })

        if ((currMember && currMember.status == 'co-host') || req.user.id == currGroup.organizerId) {
            let attendance = await User.findAll({
                include: {
                    model: Attendance, as: 'Attendance',
                    attributes: ['status'],
                    where: {
                        eventId: req.params.eventId,
                        status: ['waitlist', 'pending', 'attending']
                    }
                },
                attributes: ['id', 'firstName', 'lastName']
            })
            res.status(200).json({"Attendees": attendance})
        } else {
            let attendance = await User.findAll({
                include: {
                    model: Attendance, as: 'Attendance',
                    attributes: ['status'],
                    where: {
                        eventId: req.params.eventId,
                        status: ['waitlist', 'attending']
                    }
                },
                attributes: ['id', 'firstName', 'lastName']
            })
            res.status(200).json({"Attendees": attendance})
        }
});

//Request to Attend an Event based on the Event's id
router.post(
    '/:eventId/attendance',
    requireAuth, eventExistsValidation, isAttending,
    async (req, res, next) => {
        const currEvent = await Event.findByPk(req.params.eventId)
        const currGroup = await Group.findByPk(currEvent.groupId)
        const currMember = await Membership.findOne({
            where: {    groupId: currGroup.id,
                        userId: req.user.id},
        })

        if (currMember == null) {
            const err = new Error('Forbidden');
            err.status = 403;
            err.title = "Forbidden"
            return next(err)
        }

        let attendance = await Attendance.create({
            eventId: req.params.eventId,
            userId: req.user.id,
            status: 'pending'
        })

        const safeAttendee = {
            userId: attendance.userId,
            status: attendance.status
        }

        res.status(200).json(safeAttendee)
    }
)

//Change the status of an attendance for an event specified by id
router.put(
    '/:eventId/attendance',
    requireAuth, eventExistsValidation, isOrgOrHostEvent,
    async (req, res, next) => {
        const { userId, status } = req.body;
        let currAttendee = await Attendance.findOne({
            where: {eventId: req.params.eventId,
                    userId: userId}
        });
        const currUser = await User.findByPk(userId)

        if (!currUser) {
            const err = new Error("User couldn't be found");
            err.status = 404;
            err.title - "User couldn't be found";
            return next(err)
        }

        if (status == 'pending') {
            const err = new Error("Cannot change an attendance status to pending")
            err.status = 400;
            err.title = "Cannot change an attendance status to pending"
            return next(err);
        }

        if (!currAttendee) {
            const err = new Error("Attendance between the user and the event does not exist")
            err.status = 404
            err.title = "Attendance between the user and the event does not exist"
            return next(err);
        }

        currAttendee.set({status})
        currAttendee = await currAttendee.save();

        const safeAttendee = {
            id: currAttendee.id,
            eventId: currAttendee.eventId,
            userId: currAttendee.userId,
            status: currAttendee.status
        }

    return res.status(200).json(safeAttendee)
})

//Delete attendance to an event specified by id
router.delete(
    '/:eventId/attendance/:userId',
    requireAuth, eventExistsValidation,
    async (req, res, next) => {
        const userId = req.params.userId;
        const currEvent = await Event.findByPk(req.params.eventId)
        const currGroup = await Group.findByPk(currEvent.groupId)
        const currUser = await User.findByPk(req.params.userId)

        if (!currUser) {
            const err = new Error("User couldn't be found");
            err.status = 404;
            return next(err)
        }

        if (userId != currGroup.organizerId && userId != req.user.id) {
            const err = new Error("Only the User or organizer may delete an Attendance")
            err.status = 403;
            err.title = "Only the User or organizer may delete an Attendance";
            return next(err);
        };

        const doomedAttendee = await Attendance.findOne({
            where: {eventId: req.params.eventId,
                    userId: userId}
        })

        if (doomedAttendee == null) {
            const err = new Error("Attendance does not exist for this User")
            err.status = 404;
            err.title = "Attendance does not exist for this User";
            return next(err);
        };

        await doomedAttendee.destroy()
        res.status(200)
        res.json({"message": "Successfully deleted attendance from event"})
    }
)

module.exports = router;
