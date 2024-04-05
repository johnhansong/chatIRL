const express = require('express')
const router = express.Router();

const { Venue } = require('../../db/models');

// express validation
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const {
    handleValidationErrors,
    venueExistsValidation,
    isOrgOrHostVenue,

} = require('../../utils/validation');

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

//edit a venue
router.put(
    '/:venueId',
    requireAuth, venueExistsValidation, validateVenue,
    isOrgOrHostVenue,
    async (req, res, next) => {
        let currVenue = await Venue.findByPk(req.params.venueId)
        const { address, city, state, lat, lng } = req.body;

        currVenue.set(
            { address, city, state, lat, lng }
        );
        currVenue = await currVenue.save();

        const safeVenue = {
            id: currVenue.id,
            groupId: currVenue.groupId,
            address: currVenue.address,
            city: currVenue.city,
            state: currVenue.state,
            lat: currVenue.lat,
            lng: currVenue.lng
        }

        res.status(200).json(safeVenue)
    }
)

module.exports = router;
