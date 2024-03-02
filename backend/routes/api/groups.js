const { Op } = require('sequelize');
const express = require('express')
const sequelize = require('sequelize')

const router = express.Router();

const { User, Group, Membership, Attendance, Venue, Event, Image } = require('../../db/models');

// express validation
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const {
    handleValidationErrors,
    groupExistsValidation,
    venueExistsValidation,
    validateDates,
    isOrgValidation,
    isHostValidation
} = require('../../utils/validation');


const validateGroup = [
    check('name')
        .exists({checkFalsy: true})
        .isLength({max: 60})
        .withMessage("Name must be 60 characters or less"),
    check('about')
        .exists({checkFalsy: true})
        .isLength({min:50})
        .withMessage("About must be 50 characters or more"),
    check('type')
        .exists({checkFalsy: true})
        .isIn(['Online', 'In person'])
        .withMessage("Type must be 'Online' or 'In person'"),
    check('private')
        .exists({checkFalsy: true})
        .isBoolean()
        .withMessage("Private must be a boolean"),
    check('city')
        .exists({checkFalsy: true})
        .withMessage("City is required"),
    check('state')
        .exists({checkFalsy: true})
        .withMessage("State is required"),
    handleValidationErrors
];

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
        .isFloat({min: 0.00})
        .withMessage("Price is invalid"),
    check('description')
        .exists({checkFalsy: true})
        .withMessage("Description is required"),
    handleValidationErrors
]

//Get all Groups
router.get(
    '/',
    async (req, res, next) => {
    const groups = await Group.findAll({
        include: [
            {
                model: Membership,
                attributes: []
            },
            {
                model: Image, as: "GroupImages",
                attributes: [],
                where: {
                    imageableType: 'Group',
                    preview: true
                },
                required: false
            }
        ],
        attributes: {
            include:[[sequelize.fn("COUNT", sequelize.col('Memberships.id')), "numMembers"],
                    [sequelize.col('GroupImages.imageURL'), 'previewImage']]
        },
        group: ['Group.id']
    });
    res.status(200).json({groups})
});

//Get all Groups joined or organized by the Current User
router.get(
    '/current',
    async (req, res, next) => {
    const currGroups = await Group.findAll({
        include: [
            {
                model: Membership,
                attributes: []
            },
            {
                model: Image, as: "GroupImages",
                attributes: [],
                where: {
                    imageableType: 'Group',
                    preview: true
                },
                required: false
            }
        ],
        where: {
            [Op.or]: [
                {'$Memberships.userId$': req.user.id},
                {organizerId: req.user.id},
            ]
        },
        attributes: {
            include:[[sequelize.fn("COUNT", sequelize.col('Memberships.id')), "numMembers"],
                    [sequelize.col('GroupImages.imageURL'), 'previewImage']]
        },
        group: ['Group.id']
    })
    res.status(200).json({currGroups})
});


// Get details of a Group from an id
router.get(
    '/:groupId', groupExistsValidation,
    async (req, res, next) => {
    const groupDetails = await Group.findByPk(req.params.groupId, {
        attributes: {
            include: [[sequelize.fn("COUNT", sequelize.col('Memberships.id')), "numMembers"]]
        },
        include: [
            {
                model: Membership,
                attributes: []
            },
            {
                model: Image,
                as: "GroupImages",
                where: {
                    imageableType: 'Group'
                },
                attributes: ['id', 'imageURL', 'preview']
            },
            {
                model: User,
                as: "Organizer",
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Venue,
                attributes: [
                    'id',
                    'groupId',
                    'address',
                    'city', 'state',
                    'lat', 'lng'
                ]
            }
        ],
    })

    res.status(200).json(groupDetails)
})

//Create a Group
router.post(
    '/', requireAuth, validateGroup,
    async (req, res, next) => {
        const { name, about, type, private, city, state } = req.body;
        const group = await Group.create({
            organizerId: req.user.id,
            name, about, type, private, city, state
        })
    res.status(200).json(group)
});

// Add an Image to a Group based on the Group's id
router.post(
    '/:groupId/images',
    groupExistsValidation, isOrgValidation, requireAuth,
    async (req, res, next) => {
        const { url, preview } = req.body;
        const newImage = await Image.create({
            imageableId: req.params.groupId,
            imageURL: url,
            preview
        });

        const safeImage = {
            id: newImage.id,
            url: newImage.imageURL,
            preview: newImage.preview
        }

    return res.status(200).json(safeImage)
    }
)

//Edit a Group
router.put(
    '/:groupId',
    groupExistsValidation, isOrgValidation, requireAuth, validateGroup,
    async (req, res, next) => {
        //find the relevant group using groupId
        let currGroup = await Group.findByPk(req.params.groupId);
        const { name, about, type, private, city, state } = req.body;

        //update information where necessary
        currGroup.set(
            { name, about, type, private, city, state }
        );

        // save the changes to the database
        currGroup = await currGroup.save();

        res.status(200).json(currGroup)
    }
)

//Delete a Group
router.delete(
    '/:groupId',
    groupExistsValidation, requireAuth, isOrgValidation,
    async (req, res, next) => {
        let currGroup = await Group.findByPk(req.params.groupId)
        await currGroup.destroy();
        res.status(200)
        res.json({"message": "Successfully deleted"})
    }
)

//Get All Venues for a Group specified by its id
router.get(
    '/:groupId/venues',
    groupExistsValidation, requireAuth, [isOrgValidation || isHostValidation],
    async (req, res, next) => {
    let groupVenues = await Group.findByPk(req.params.groupId, {
        attributes: [],
        include: {
            model: Venue,
            attributes: [
                'id', 'groupId',
                'address',
                'city', 'state',
                'lat', 'lng'
            ]
        }
    })
    res.status(200).json(groupVenues)
})

//Create a new Venue for a Group specified by its id
router.post(
    '/:groupId/venues',
    groupExistsValidation, requireAuth, [isOrgValidation || isHostValidation],
    async (req, res, next) => {
        const { address, city, state, lat, lng } = req.body;
        const newVenue = await Venue.create({
            groupId: req.params.groupId,
            address, city, state, lat, lng
        })

        const safeVenue = {
            id: newVenue.id,
            groupId: newVenue.groupId,
            address: newVenue.address,
            city: newVenue.city,
            state: newVenue.state,
            lat: newVenue.lat,
            lng: newVenue.lng
        }
    res.status(200).json(safeVenue)
    }
)

//Get all Events of a Group specified by its id
router.get(
    '/:groupId/events',
    groupExistsValidation,
    async (req, res, next) => {
        const eventsById = await Event.findAll({
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
            where: {groupId: req.params.groupId},
            attributes: {
                include: [[sequelize.fn("COUNT", sequelize.col('Attendances.id')), "numAttending"],
                            [sequelize.col("EventImages.imageURL"), 'previewImage']],
                exclude: ['createdAt', 'updatedAt']
            }
        })
    res.status(200).json(eventsById)
    }
)

//Create an Event for a Group specified by its id
router.post(
    '/:groupId/events',
    requireAuth, validateEvent, validateDates,
    venueExistsValidation, groupExistsValidation,
    [isOrgValidation || isHostValidation],
    async (req, res, next) => {
        const { venueId, name, type,
            capacity, price, description,
            startDate, endDate} = req.body;

        const newEvent = await Event.create({
            groupId: req.params.groupId,
            venueId, name, type, capacity, price, description,
            startDate, endDate,
        })

        const safeEvent = {
            id: newEvent.id,
            groupId: newEvent.groupId,
            venueId: newEvent.venueId,
            name: newEvent.name,
            type: newEvent.type,
            capacity: newEvent.capacity,
            price: newEvent.price,
            description: newEvent.description,
            startDate: newEvent.startDate,
            endDate: newEvent.endDate
        }
        res.status(200).json(safeEvent)
    }
)

module.exports = router;
