const { validationResult } = require('express-validator');
const { Group } = require('../db/models')

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


// validating if currUser is the organizer of the currGroup
const isOrgValidation = async (req, _res, next) => {
    let currGroup = await Group.findByPk(req.params.groupId);
    if (req.user.id == currGroup.organizerId) return next();

    const err = new Error("Forbidden");
    err.status = 403;
    err.title = "Authorization required";
    return next(err);
}

// validating if currUser is the co-host of the currGroup
const isHostValidation = async (req, _res, next) => {
    let currGroup = await Group.findByPk(req.params.groupId);
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
    isOrgValidation,
    isHostValidation
};
