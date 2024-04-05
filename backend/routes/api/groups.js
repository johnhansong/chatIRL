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
    membershipExistsValidation,
    validateDates,
    isOrgValidation,
    isHostValidation,
    isOrgOrHostGroup,
    isMember,
    changeStatusAuth,
    deleteMembership
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
        .exists({checkFalsy: false})
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
        .withMessage("Type must be Online or In person"),
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
    validateDates,
    handleValidationErrors
]

const validateVenue = [
    check('address')
        .exists({checkFalsy: true})
        .withMessage("Street address is required"),
    check('city')
        .exists({checkFalsy: true})
        .withMessage("City is required"),
    check('state')
        .exists({checkFalsy: true})
        .withMessage("State is required"),
    check('lat')
        .exists({checkFalsy: true})
        .isFloat({min: -90, max: 90})
        .withMessage("Latitude must be within -90 and 90"),
    check('lng')
        .exists({checkFalsy: true})
        .isFloat({min: -180, max: 180})
        .withMessage("Longitude must be within -180 and 180"),
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
        group: ['Group.id', 'GroupImages.imageURL']
    });
    res.status(200).json({groups})
});

//Get all Groups joined or organized by the Current User
router.get(
    '/current',
    requireAuth,
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
            [Op.or]: [{organizerId: req.user.id}, {"$Memberships.userId$": req.user.id}]
        },
        attributes: {
            include:[[sequelize.fn("COUNT", sequelize.col('Memberships.id')), "numMembers"],
                    [sequelize.col('GroupImages.imageURL'), 'previewImage']]
        },
        group: ['Group.id', 'GroupImages.imageURL']
    })
    if (!currGroups.length) {
        const err = new Error('No groups found for current user')
        err.status = 404
        err.title = "No groups found for current user"
        return next(err)
    }

    res.status(200).json({"Groups": currGroups})
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
                attributes: ['id', 'imageURL', 'preview'],
                required: false
            },
            {
                model: User,
                as: "Organizer",
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Venue,
                attributes: {exclude: ['createdAt', 'updatedAt']}
            }
        ],
        group: ['Group.id', 'GroupImages.id', 'GroupImages.imageURL', 'Organizer.id', 'Venue.id']
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

    await Membership.create({
        userId: req.user.id,
        groupId: group.id,
        status: "co-host"
    })

    res.status(201).json(group)
});

// Add an Image to a Group based on the Group's id
router.post(
    '/:groupId/images',
    requireAuth, groupExistsValidation, isOrgValidation,
    async (req, res, next) => {
        const { url, preview } = req.body;
        const currGroup = Group.findByPk(req.params.groupId)
        const newImage = await Image.create({
            imageableId: req.params.groupId,
            imageableType: 'Group',
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
    requireAuth, groupExistsValidation, isOrgValidation, validateGroup,
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
    requireAuth, groupExistsValidation, isOrgValidation,
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
    requireAuth, groupExistsValidation, isOrgOrHostGroup,
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
    requireAuth, validateVenue, groupExistsValidation, isOrgOrHostGroup,
    async (req, res, next) => {
        const { address, city, state, lat, lng } = req.body;
        const newVenue = await Venue.create({
            groupId: req.params.groupId,
            address, city, state, lat, lng
        })

        const safeVenue = {
            id: newVenue.id,
            groupId: parseInt(newVenue.groupId),
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
            },
            group: ['Event.id']
        })
    res.status(200).json(eventsById)
    }
)

//Create an Event for a Group specified by its id
router.post(
    '/:groupId/events',
    requireAuth, validateEvent,
    venueExistsValidation, groupExistsValidation, isOrgOrHostGroup,
    async (req, res, next) => {
        const { venueId, name, type,
            capacity, price, description,
            startDate, endDate} = req.body;

        const newEvent = await Event.create({
            groupId: req.params.groupId,
            venueId, name, type, capacity, price, description,
            startDate, endDate,
        })

        await Attendance.create({
            userId: req.user.id,
            eventId: newEvent.id,
            status: "attending"
        })

        const safeEvent = {
            id: newEvent.id,
            groupId: parseInt(newEvent.groupId),
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

//Get all Members of a Group specified by its id
router.get(
    '/:groupId/members',
    groupExistsValidation,
    async (req, res, next) => {
        let currGroup = await Group.findByPk(req.params.groupId)
        let currMembership = await Membership.findOne({
            where: {
                groupId: currGroup.id,
                userId: req.user.id
            }
        });

        if ((currMembership && currMembership.status == "co-host") || req.user.id == currGroup.organizerId) {
            let members = await User.findAll({
                include: {
                    model: Membership, as: 'Membership',
                    attributes: ['status'],
                    where: {
                        groupId: req.params.groupId,
                        status: ['co-host', 'member', 'pending']
                    }
                },
                attributes: ['id', 'firstName', 'lastName']
            })
            res.status(200).json({"Members": members})
        }
        else {
            let members = await User.findAll({
                include: {
                    model: Membership, as: 'Membership',
                    attributes: ['status'],
                    where: {
                        groupId: req.params.groupId,
                        status: ['co-host', 'member']
                    }
                },
                attributes: ['id', 'firstName', 'lastName']
            })
            res.status(200).json({"Members": members})
        }
    }
)

//Request a Membership for a Group based on the Group's id
router.post(
    '/:groupId/membership',
    requireAuth, groupExistsValidation, isMember,
    async (req, res, next) => {
        let newMembership = await Membership.findOne({
            where: {
                groupId: req.params.groupId,
                userId: req.user.id
            }
        });

        newMembership = await Membership.create({
            groupId: req.params.groupId,
            userId: req.user.id,
            status: 'pending'
        });

        const safeMember = {
            memberId: newMembership.userId,
            status: newMembership.status
        }

        res.status(200).json(safeMember)
    }
)

//Change the status of a membership for a group specified by id
//FLAG TO INSTRUCTORS ABOUT API DOCS/TEST INCONSISTENCY
router.put(
    '/:groupId/membership/',
    requireAuth, groupExistsValidation, membershipExistsValidation, changeStatusAuth,
    async (req, res, next) => {
    const { memberId, status } = req.body;
    let currMembership = await Membership.findOne({
        where: {
            groupId: req.params.groupId,
            userId: memberId}
    })


    const err = new Error("Validation Error")
    err.status = 400;
    //If changing the membership status to "pending"
    if (status == 'pending') {
        err.errors = { 'status': 'Cannot change a membership status to pending' }
        return next(err);
    }
    //Couldn't find a User with the specified memberId
    let user = await User.findByPk(memberId)
    if (user == null) {
        err.errors = { "memberId": "User couldn't be found" }
        return next(err);
    }

    currMembership.set({status})
    currMembership = await currMembership.save()

    const safeMember = {
        id: currMembership.id,
        groupId: currMembership.groupId,
        memberId: currMembership.memberId,
        status: currMembership.status
    }

    res.status(200).json(safeMember)
});

//Delete membership to a group specified by id
router.delete(
    '/:groupId/membership/:memberId',
    requireAuth, groupExistsValidation, deleteMembership,
    async (req, res, next) => {
        const memberId = req.params.memberId;

        //Error response: couldn't find a User with the specified memberId
        const currUser = await User.findByPk(memberId);
        if (currUser == null) {
            err = new Error('Validation Error')
            err.status = 400;
            err.errors = {"memberId": "User couldn't be found"}
            return next(err)
        }

        let doomedMember = await Membership.findOne({
            where: {
                groupId: req.params.groupId,
                userId: memberId
            }
        })

        //Error response: Membership does not exist for this User
        if (doomedMember == null) {
            err = new Error("Membership does not exist for this User");
            err.status = 404;
            err.title = "Membership does not exist for this User";
            return next(err)
        }

    await doomedMember.destroy();
    res.status(200).json({"message": "Successfully deleted membership from group"})
})

module.exports = router;
