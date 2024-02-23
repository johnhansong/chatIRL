const { Op } = require('sequelize');
const express = require('express')
const bcrypt = require('bcryptjs');

const router = express.Router();

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Group,  } = require('../../db/models');

// express validation
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateGroup = [
    check('name')
    .exists({checkFalsy: true})
    .isLength({max: 60})
    .withMessage("Name must be 60 characters or less")

    //check []
]

router.get('/',
    async(req, res, next) => {
    const groups = await Group.findAll()

    return res.status(200).json({ 'Groups': groups })
});
