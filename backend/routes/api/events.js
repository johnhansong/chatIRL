const { Op } = require('sequelize');
const express = require('express')
const sequelize = require('sequelize')

const router = express.Router();

const { User, Event, Group, Membership, Venue, Image } = require('../../db/models');

// express validation
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const {
    handleValidationErrors,
    groupExistsValidation,
    isOrgValidation,
    isHostValidation
} = require('../../utils/validation');

router.get(
    '/',
    async (req, res, next) => {
    let currEvent = Event.findAll({
        include: [
            {
                model: Attendance,
                attributes: [],
                where: {status: "attending"}
            },
            {
                model: Image, as: EventImage,
                where: {preview: true}
            },
            {
                model: Group,
                attributes: ['id', 'name', 'city', 'state']
            },
            {
                model: Venue,
                attributes: ['id', 'city', 'state']
            }
        ]

    });
});



module.exports = router;
