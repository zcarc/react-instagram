const express = require('express');
const router = express.Router();
const db = require('../models/index');

// add post
router.post('/',async (req, res, next) => {

    console.log('routes/post... /post... req.body: ', req.body);
    console.log('routes/post... /post... req.user.toJSON(): ', req.user && req.user.toJSON());

    try {

        const content = req.body.postDesc;

        const newPost = await db.Post.create({
            content,
            UserId: req.user.id,
        });

        console.log('newPost: ', newPost);


        const hashTags = content.match(/#[^\s#]+/g);

        console.log('hashTags: ', hashTags);

        if(hashTags) {
            const result = await Promise.all(hashTags.map(tag => db.Hashtag.findOrCreate({
                where: { name: tag.slice(1).toLowerCase() },
            })));

            // console.log('result: ', result);
            console.log('JSON.stringify(result): ', JSON.stringify(result));

            // const resultMap = result.map(hashTagRow => hashTagRow[0]);
            // console.log('resultMap: ', resultMap);

            // returns an array that has objects.
            const resultNM = await newPost.addHashtags( result.map(hashTagRow => hashTagRow[0]) );
            // console.log('resultNM: ', resultNM);

            // hashTags.map((tag) => {
            //     console.log('tag: ', tag);
            //     return db.Hashtag.findOne({
            //         where: { name: tag },
            //     });
            // });

            // console.log('hashTags[0]: ', hashTags[0]);
            // const create = await db.Hashtag.create({
            //     name: hashTags[0].slice(1),
            // });
            // console.log('create: ', create);

            // result.map( (e) => {
            //     console.log('e: ', e);
            //     console.log('e[0]: ', e[0]);
            //     console.log('JSON.stringify(e[0]) : ', JSON.stringify(e[0]));
            // } );

        }


        // case 1.
        // const user = await db.Post.findOne({
        //     where: { id: newPost.id },
        //     include: [{
        //         model: db.User,
        //     }],
        // });
        //
        // console.log('case 2 user: ', user);
        // console.log('case 2 user.toJSON(): ', user.toJSON());

        // case 2.
        // returns an object not array.
        const user = await newPost.getUser();

        const filteredUser = Object.assign({}, user.toJSON());
        delete filteredUser.userPassword;

        res.json(filteredUser);

    } catch (e) {
        console.error(e);
        next(e);
    }

});

module.exports = router;