const { validationResult } = require('express-validator');
const { Group, Venue } = require('../db/models')

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

const venueExistsValidation = async (req, _res, next) => {
    if (await Venue.findByPk(req.params.venueId)) return next();

    const err = new Error("Venue couldn't be found");
    err.status = 404;
    err.title = "Venue couldn't be found"
    return next(err)
}


// validating if currUser is the organizer of the currGroup
const isOrgValidation = async (req, _res, next) => {
    let currGroup = await Group.findByPk(req.params.groupId);
    if (currGroup && req.user.id == currGroup.organizerId) return next();

    let venue = await Venue.findByPk(req.params.venueId);
    let venueGroup = await Group.findByPk(venue.groupId);
    if (venueGroup && req.user.id == venueGroup.organizerId) return next();

    const err = new Error("Forbidden");
    err.status = 403;
    err.title = "Authorization required";
    return next(err);
}

// validating if currUser is the co-host of the currGroup
const isHostValidation = async (req, _res, next) => {
    let currMember = await Membership.findOne({
        where: { groupId: group.id, userId: req.user.id }
    })
    if (currMember.staus == 'co-host') return next();

    const err = new Error("Forbidden")
    err.status = 403;
    err.title = "Authorization required";
    return next(err)
}


module.exports = {
    handleValidationErrors,
    groupExistsValidation,
    venueExistsValidation,
    isOrgValidation,
    isHostValidation
};
