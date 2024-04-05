const express = require('express')
const router = express.Router();

const { Image } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const { isOrgOrHostImg } = require('../../utils/validation')

router.delete(
    '/:imageId',
    requireAuth, isOrgOrHostImg,
    async (req, res, next) => {

    const doomedImg = await Image.findByPk(req.params.imageId)

    if (doomedImg == null) {
        const err = new Error("Event Image couldn't be found");
        err.status = 404;
        err.title = "Event Image couldn't be found"
        return next(err)
    }

    await doomedImg.destroy();
    res.status(200)
    res.json({"message": "Successfully deleted"})
})


module.exports = router;
