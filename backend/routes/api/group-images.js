const express = require('express')
const router = express.Router();

const { Image } = require('../../db/models');

// express validation
const { requireAuth } = require('../../utils/auth');
const { isOrgOrHostImg } = require('../../utils/validation')



router.delete(
    '/:imageId',
    requireAuth, isOrgOrHostImg,
    async (req, res, next) => {
        const doomedImg = await Image.findOne({
            where: {imageableType: "Group",
                    id: req.params.imageId
            }
        })

    if (doomedImg == null) {
        const err = new Error("Group Image couldn't be found");
        err.status = 404;
        err.title = "Group Image couldn't be found"
        return next(err)
    }


    await doomedImg.destroy();
    res.status(200)
    res.json({"message": "Successfully deleted"})
})

module.exports = router;
