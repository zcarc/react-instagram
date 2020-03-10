const express = require('express');
const router = express.Router();
const db = require('../models/index');

// get all posts
router.get('/', async (req, res, next) => {

    // db.Post.findAll({
    //     include: [{
    //         model: db.User,
    //     }],
    // })

    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attributes: ['id','userNickname'],
            }, {
                model: db.Image,
            }],
            order: [['createdAt', 'DESC']],
        });
        // console.log('posts: ', posts);
        console.log('JSON.stringify(posts): ', JSON.stringify(posts));

        res.json(posts);

    }catch (e) {
        console.error(e);
        next(e);
    }

});

module.exports = router;