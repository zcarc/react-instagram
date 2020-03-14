const express = require('express');
const router = express.Router();
const db = require('../models/index');

// get all posts
router.get('/', async (req, res, next) => {

    const lastId = parseInt(req.query.lastId);
    console.log('req.query: ', req.query);

    let where = {};

    if(lastId) {
        where = {
            id: {
                [db.Sequelize.Op.lt]: lastId
            }
        };
    }

    try {
        const posts = await db.Post.findAll({

            where,

            include: [{
                model: db.User,
                attributes: ['id','userNickname'],
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
            limit: parseInt(req.query.limit),
        });
        // console.log('posts: ', posts);
        console.log('JSON.stringify(posts): ', JSON.stringify(posts));

        return res.json(posts);

    }catch (e) {
        console.error(e);
        next(e);
    }

});

module.exports = router;