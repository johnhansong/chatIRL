const express = require('express')
const router = express.Router();

const { Group, Event, Membership, Image } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

router.delete(
    '/:imageId',
    requireAuth,
    async (req, res, next) => {
        const doomedImg = await Image.findOne({
            where: {imageableType: "Event",
                    imageableId: req.params.imageId
            }
        })

        console.log(doomedImg)

    if (doomedImg == null) {
        const err = new Error("Event Image couldn't be found");
        err.status = 404;
        err.title = "Event Image couldn't be found"
        return next(err)
    }
    const currEvent = await Event.findByPk(doomedImg.imageableId)
    const currMember = await Membership.findOne(
                        {eventId: currEvent.id,
                        userId: req.user.id}
                        )

    const currGroup = await Group.findByPk(currEvent.groupId)
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
