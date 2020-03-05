const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/index');
const passport = require('passport');


router.post('/', async(req, res, next) => {

    console.log('routes/user... req.body: ', req.body);

    try {

        const exUser = await db.User.findOne({
            where:{
                userId: req.body.userId,
            },
        });

        // console.log('exUser: ', exUser);
        // console.log('exUser.toJSON(): ', exUser.toJSON());

        if(exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.userPassword, 12);

        const newUser = await db.User.create({
            userId: req.body.userId,
            userPassword: hashedPassword,
            userNickname: req.body.userNickname,
        });

        // console.log('newUser: ', newUser);
        console.log('newUser.toJSON(): ', newUser.toJSON());


        return res.status(200).json(newUser);

    }catch (e) {
        console.error(e);
        return next(e);
    }

});

router.post('/login', async (req, res, next) => {

    console.log('routes/user... req.body: ', req.body);


    passport.authenticate('local', (err, user, info) => {

        // if not exists,
        console.log('routes/user... passport.authenticate err: ', err); // null
        console.log('routes/user... passport.authenticate user: ', user); // false
        console.log('routes/user... passport.authenticate info: ', info); // undefined

    })(req, res, next);

});

module.exports = router;