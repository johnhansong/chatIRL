const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Invalid email'),
    check('firstName')
        .exists({checkFalsy: true})
        .withMessage('First Name is required'),
    check('lastName')
        .exists({checkFalsy: true})
        .withMessage('Last Name is required'),
    handleValidationErrors
];

// Sign up
router.post(
    '/',
    validateSignup,
    async (req, res, next) => {
        const { firstName, lastName, email, username, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password);

        const emailExists = await User.findOne({
            email: req.body.email
        })
        if (emailExists) {
            const err = new Error("User already exists")
            err.status = 500;
            err.errors = {"email": "User with that email already exists"}
            return next(err)
        }

        const usernameExists = await User.findOne({
            username: req.body.username
        })
        if (usernameExists) {
            const err = new Error("User already exists")
            err.status = 500;
            err.errors = {"username": "User with that username already exists"}
            return next(err)
        }

        const user = await User.create({ firstName, lastName, email, username, hashedPassword });

        const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
    };

    await setTokenCookie(res, safeUser);

    return res.json({
        user: safeUser
    });
});




module.exports = router;
