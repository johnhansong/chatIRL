const express = require('express')
const router = express.Router();
const { Group, Membership, Image } = require('../../db/models');

// express validation
const { requireAuth } = require('../../utils/auth');



router.delete(
    '/:imageId',
    requireAuth,
    async (req, res, next) => {
        const doomedImg = await Image.findOne({
            where: {imageableType: "Group",
                    imageableId: req.params.imageId
            }
        })

    if (doomedImg == null) {
        const err = new Error("Group Image couldn't be found");
        err.status = 404;
        err.title = "Group Image couldn't be found"
        return next(err)
    }
    const currGroup = await Group.findByPk(doomedImg.imageableId)
    const currMember = await Membership.findOne(
                        {groupId: currGroup.id,
                        userId: req.user.id}
                        )

    if ((req.user.id != currGroup.organizerId) && (currMember.status != 'co-host')) {
        const err = new Error("Forbidden");
        err.status = 403;
        err.title = "Forbidden"
        return next(err)
    }

    await doomedImg.destroy();
    res.status(200)
    res.json({"message": "Successfully deleted"})
})

module.exports = router;
