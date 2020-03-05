const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/index');
const passport = require('passport');

// load user
router.get('/', (req, res) => {

    if (!req.user) {
        return res.status(401).send('로그인이 필요합니다.');
    }

    const user = Object.assign({}, req.user.toJSON());
    delete user.userPassword;

    console.log('routes/user... LOAD_USER_REQUEST... user: ', user);

    return res.json(user);
});

// register
router.post('/', async (req, res, next) => {

    console.log('routes/user... req.body: ', req.body);

    try {

        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId,
            },
        });

        // console.log('exUser: ', exUser);
        // console.log('exUser.toJSON(): ', exUser.toJSON());

        if (exUser) {
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

    } catch (e) {
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

        // console.log('routes/user... passport.authenticate req.user: ', req.user);
        // console.log('routes/user... passport.authenticate req.session: ', req.session);

        if (err) {
            console.error(err);
            return next(err);
        }

        if (info) {
            return res.status(401).send(info.reason);
        }


        return req.login(user, async (loginError) => {

            console.log('req.login()... user: ', user);
            console.log('req.login()... req.user: ', req.user); // db object
            console.log('req.login()... req.session: ', req.session); // { passport: { user: 1 } }


            if (loginError) {
                console.error(loginError);
                next(loginError);
            }

            const fullUser = await db.User.findOne({
                where: {id: user.id},
                include: [{
                    model: db.Post,
                    attributes: ['id'],
                }]
            });
            console.log('fullUser.toJSON: ', fullUser && fullUser.toJSON());

            const filteredUser = Object.assign({}, user.toJSON());
            delete filteredUser.userPassword;
            // console.log('deleted userPassword filteredUser: ', filteredUser);

            return res.json(filteredUser);

        });


    })(req, res, next);

});

router.post('/logout', (req, res, next) => {
    console.log('/logout...');

    req.logout();
    req.session.destroy();

    res.send('You have been logged out.');
});

module.exports = router;