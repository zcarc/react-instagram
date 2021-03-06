const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/:tag', async (req, res, next) => {
    // console.log('hashtag route... req: ', req);
    // console.log('hashtag route... req.params: ', req.params);

    try {
        const hashtagPosts = await db.Post.findAll({
            include: [{
                model: db.Hashtag,
                where: {name: decodeURIComponent(req.params.tag)},
            }, {
                model: db.User,
                attributes: ['id', 'userNickname', 'userProfileImage'],
            }, {
                model: db.Image,
            }, {
                model: db.User,
                as: 'Likers',
                attributes: ['id'],
                through: 'Like',
            }, {
                model: db.Post,
                as: 'Bookmark',
                include: [{
                    model: db.User,
                    attributes: ['id', 'userNickname'],
                }, {
                    model: db.Image,
                }, {
                    model: db.User,
                    as: 'Likers',
                    attributes: ['id'],
                    through: 'Like',
                }],
            }],
            order: [['createdAt', 'DESC']],

        });
        // console.log('hashtagPosts: ', JSON.stringify(hashtagPosts));

        return res.json(hashtagPosts);

    } catch (e) {
        console.error(e);
        next(e);
    }

});

module.exports = router;

