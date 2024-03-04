const { validationResult } = require('express-validator');
const { Group, Venue, Event, Membership } = require('../db/models')
const { check } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors
        .array()
        .forEach(error => errors[error.path] = error.msg);

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    err.title = "Bad request.";
    next(err);
    }
    next();
};

// validating if group exists
const groupExistsValidation = async (req, _res, next) => {
    if (await Group.findByPk(req.params.groupId)) return next();

    const err = new Error("Group couldn't be found");
    err.status = 404;
    err.title = "Group couldn't be found"
    return next(err)
}

// validating if venue exists
const venueExistsValidation = async (req, _res, next) => {
    if (await Venue.findByPk(req.params.venueId)) return next();
    if (await Venue.findByPk(req.body.venueId)) return next();

    const err = new Error("Venue couldn't be found");
    err.status = 404;
    err.title = "Venue couldn't be found"
    return next(err)
}

//validating if event exists
const eventExistsValidation = async (req, _res, next) => {
    if (await Event.findByPk(req.params.eventId)) return next();

    const err = new Error("Event couldn't be found");
    err.status = 404;
    err.title = "Event couldn't be found"
    return next(err)
}

//validating if membership exists
const membershipExistsValidation = async (req, _res, next) => {
    const { memberId } = req.body
    if (await Membership.findOne({
        where: {groupId: req.params.groupId, userId: memberId}})) {
            return next();
        }

        const err = new Error("Membership between the user and the group does not exist")
        err.status = 404;
        err.title = "Membership between the user and the group does not exist"
        return next(err)
}

const deleteMembership = async (req, _res, next) => {
    const group = await Group.findByPk(req.params.groupId);
    const memberId = req.params.memberId;
    if (group.organizerId == req.user.id || memberId == req.user.id) return next();

    const err = new Error("Forbidden")
    err.status = 403;
    err.title = "Forbidden";
    return next(err);
}

// const authValidation = async (table, auth, column) => {
//     async (req, _res, next) => {
//         let currTable = await table.
//     }
// }


// validating if currUser is the organizer of the currGroup
const isOrgValidation = async (req, _res, next) => {
    let currGroup = await Group.findByPk(req.params.groupId);
    if (currGroup && req.user.id == currGroup.organizerId) return next();

    let venue = await Venue.findByPk(req.params.venueId);
    if (venue) {
        let venueGroup = await Group.findByPk(venue.groupId)
        if (venueGroup && req.user.id == venueGroup.organizerId) return next();
    }

    const err = new Error("Forbidden");
    err.status = 403;
    err.title = "Authorization required";
    return next(err);
}

// validating if currUser is the co-host of the currGroup
const isHostValidation = async (req, _res, next) => {
    let event = await Event.findByPk(req.params.eventId)
    let group = await Group.findByPk(event.groupId)
    let groupMember = await Membership.findOne({
        where: { groupId: group.id, userId: req.user.id }
    })
    if (groupMember.status == 'co-host') return next();

    const err = new Error("Forbidden")
    err.status = 403;
    err.title = "Authorization required";
    return next(err)
}

const isOrgOrHostGroup = async (req, _res, next) => {
    const currGroup = await Group.findByPk(req.params.groupId);
    const currMember = await Membership.findOne({
        where: {
            groupId: currGroup.id,
            userId: req.user.id
        }
    })
    if (req.user.id == currGroup.organizerId || currMember.status == 'co-host') return next();

    const err = new Error("Forbidden")
    err.status = 403;
    err.title = "Authorization required";
    return next(err)
}

const isOrgOrHostEvent = async (req, _res, next) => {
    const currEvent = await Event.findByPk(req.params.eventId)
    const currGroup = await Group.findByPk(currEvent.groupId)
    const currMember = await Membership.findOne({
        where: {    groupId: currGroup.id,
                    userId: req.user.id},
    })

    if ((currMember && currMember.status)  == 'co-host' ||
        (currMember && currGroup.organizerId == req.user.id))
        return next()

    const err = new Error("Forbidden")
    err.status = 403;
    err.title = "Forbidden";
    return next(err)
}

const isOrgOrHostVenue = async (req, _res, next) => {
    const currVenue = await Venue.findByPk(req.params.venueId)
    const currGroup = await Group.findbyPk(currVenue.groupId)
    const currMember = await Membership.findOne({
        where: {    groupId: currGroup.id,
                    userId: req.user.id},
    })

    if ((currMember && currMember.status)  == 'co-host' ||
        (currMember && currGroup.organizerId == req.user.id))
        return next()

    const err = new Error("Forbidden")
    err.status = 403;
    err.title = "Forbidden";
    return next(err)
}

const isAttendeeValidation = async (req, _res, next) => {
    let event = await Event.findByPk(req.params.eventId)
    let group = await Group.findByPk(event.groupId)
    let currMember = await Membership.findOne({
        where: { groupId: group.id, userId: req.user.id }
    })
    if (currMember.status == 'attending') return next();

    const err = new Error("Forbidden")
    err.status = 403;
    err.title = "Authorization required";
    return next(err)
}

//validate start and end dates are in order
const validateDates = [
    check('startDate')
        .exists({checkFalsy: true})
        .custom(date => {
            let startDate = new Date(date);
            if (startDate < new Date()) return false;
            else return true;
        })
        .withMessage("Start date must be in the future"),
    check('endDate')
        .exists({checkFalsy: true})
        .custom((date, {req}) => {
            let startDate = new Date(req.body.startDate);
            let endDate = new Date(date);
            if (startDate >= endDate) return false;
            else return true;
        })
        .withMessage("End date is less than start date"),
    handleValidationErrors
]

const isMember = async (req, _res, next) => {
    let currMembership = await Membership.findOne({
        where: {
            groupId: req.params.groupId,
            userId: req.user.id
        }
    })
    if (currMembership == null) return next()

    const err = currMembership.status == 'pending' ?
        new Error("Membership has already been requested")
    :   new Error("User is already a member of the group")
    err.status = 400;
    return next(err)
}

const isAttending = async (req, _res, next) => {
    const currEvent = await Event.findByPk(req.params.eventId)
    const currGroup = await Group.findByPk(currEvent.groupId)
    const currMember = await Membership.findOne({
        where: {    groupId: currGroup.id,
                    userId: req.user.id},
    });
    if (currMember == null) return next()

    if (currMember.status == 'pending') {
        const err = new Error("Attendance has already been requested");
        err.status = 400;
        return next(err)
    } else {
        const err = new Error("User is already an attendee of the event");
        err.status = 400;
        return next(err)
    }
}

module.exports = {
    handleValidationErrors,
    groupExistsValidation,
    venueExistsValidation,
    eventExistsValidation,
    membershipExistsValidation,
    isOrgOrHostEvent,
    isOrgOrHostGroup,
    isOrgOrHostVenue,
    validateDates,
    isOrgValidation,
    isHostValidation,
    isAttendeeValidation,
    isMember,
    isAttending,
    deleteMembership
};
