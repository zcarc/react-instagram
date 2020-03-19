const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models/index');
const passport = require('passport');
const {isLoggedIn} = require('./middleware');
const {upload} = require('./common');

// load user session
router.get('/', isLoggedIn, async (req, res) => {

    // const user = Object.assign({}, req.user.toJSON());
    // delete user.userPassword;
    // console.log('routes/user... LOAD_USER_REQUEST... user: ', user);

    const fullUser = await db.User.findOne({
        where: {id: req.user.id},
        include: [{
            model: db.Post,
            attributes: ['id'],
        }, {
            model: db.User,
            as: 'Followings',
            attributes: ['id'],
        }, {
            model: db.User,
            as: 'Followers',
            attributes: ['id'],
        }],
        attributes: ['id', 'userId', 'userNickname', 'userProfileImage'],
    });

    return res.json(fullUser);
});

// load user info
// router.get('/:id', isLoggedIn, async (req, res, next) => {
//
//     // const test = req.params.id || req.user.id;
//     // console.log('routes/user... load user info... req.user: ', req.user);
//     // console.log('routes/user... load user info... req.params: ', req.params);
//     // console.log('routes/user... load user info... test: ', test);
//
//     try {
//
//         const anUserInfo = await db.User.findOne({
//             where: {
//                 id: parseInt(req.params.id) || parseInt(req.user.id),
//             },
//             include: [{
//                 model: db.Post,
//                 attributes: ['id'],
//             }, {
//                 model: db.User,
//                 as: 'Followings',
//                 attributes: ['id'],
//             }, {
//                 model: db.User,
//                 as: 'Followers',
//                 attributes: ['id'],
//             }],
//             attributes: ['id', 'userNickname'],
//         });
//
//         // console.log('JSON.stringify(anUserInfo): ', JSON.stringify(anUserInfo));
//
//         const jsonAnUserInfo = anUserInfo.toJSON();
//         jsonAnUserInfo.Posts = jsonAnUserInfo.Posts ? jsonAnUserInfo.Posts.length : 0;
//
//         res.json(jsonAnUserInfo);
//
//     } catch (e) {
//         console.error(e);
//         next(e);
//     }
//
// });

// load session user profile posts
router.get('/:id/posts', async (req, res, next) => {

    console.log('/:id/posts req.params: ', req.params);
    console.log('/:id/posts req.user: ', req.user);

    // if(!parseInt(req.params.id) && req.user) {
    //     req.params.id = req.user.id;
    // }

    try {
        const userPosts = await db.Post.findAll({
            where: {
                UserId: parseInt(req.params.id, 10) || req.user.id,
                BookmarkId: null,
            },
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
            order: [['createdAt', 'DESC']],
        });

        // console.log('JSON.stringify(userPosts): ', JSON.stringify(userPosts));

        return res.json(userPosts);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});

// register
router.post('/', async (req, res, next) => {

    // console.log('routes/user... req.body: ', req.body);

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
        // console.log('newUser.toJSON(): ', newUser.toJSON());


        return res.status(200).json(newUser);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});

router.post('/login', async (req, res, next) => {

    // console.log('routes/user... req.body: ', req.body);


    passport.authenticate('local', (err, user, info) => {

        // if not exists,
        //  console.log('routes/user... passport.authenticate err: ', err); // null
        //  console.log('routes/user... passport.authenticate user: ', user); // false
        //  console.log('routes/user... passport.authenticate info: ', info); // undefined

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

            //  console.log('req.login()... user: ', user);
            //  console.log('req.login()... req.user: ', req.user); // db object
            //  console.log('req.login()... req.session: ', req.session); // { passport: { user: 1 } }


            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }

            try {

                const fullUser = await db.User.findOne({
                    where: {id: user.id},
                    include: [{
                        model: db.Post,
                        attributes: ['id'],
                    }, {
                        model: db.User,
                        as: 'Followings',
                        attributes: ['id'],
                    }, {
                        model: db.User,
                        as: 'Followers',
                        attributes: ['id'],
                    }],
                    attributes: ['id', 'userId', 'userNickname', 'userProfileImage'],
                });
                //  console.log('fullUser.toJSON: ', fullUser && fullUser.toJSON());

                // const filteredUser = Object.assign({}, user.toJSON());
                // delete filteredUser.userPassword;
                // console.log('deleted userPassword filteredUser: ', filteredUser);

                return res.json(fullUser);

            } catch (e) {
                console.error(e);
                next(e);
            }

        });


    })(req, res, next);

});

router.post('/logout', isLoggedIn, (req, res, next) => {
    //  console.log('/logout...');

    req.logout();
    req.session.destroy();

    res.send('You have been logged out.');
});

router.post('/:postUserId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await db.User.findOne({
            where: {id: req.user.id},
        });
        //  console.log('/id:/follow... user.toJSON(): ', user.toJSON());

        await user.addFollowing(req.params.postUserId);

        return res.send(req.params.postUserId);

    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.delete('/:postUserId/follow', isLoggedIn, async (req, res, next) => {
    try {
        const user = await db.User.findOne({
            where: {id: req.user.id},
        });
        //  console.log('/postUserId/follow... user.toJSON(): ', user.toJSON());

        await user.removeFollowing(req.params.postUserId);

        return res.send(req.params.postUserId);

    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.get('/:userId/followings', isLoggedIn, async (req, res, next) => {

    try {
        const user = await db.User.findOne({
            where: {id: parseInt(req.params.userId, 10) || (req.user.id || 0)},
            attributes: ['id'],
        });

        if (!user) {
            return res.status('404').send('존재하지 않는 사용자입니다.');
        }

        const userFollowings = await user.getFollowings({
            attributes: ['userId', 'userNickname', 'userProfileImage'],
        });

        //  console.log('userFollowings: ', JSON.stringify(userFollowings));

        return res.json(userFollowings);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});

router.get('/:userId/followers', isLoggedIn, async (req, res, next) => {

    try {
        const user = await db.User.findOne({
            where: {id: parseInt(req.params.userId, 10) || (req.user.id || 0)},
            attributes: ['id'],
        });

        if (!user) {
            return res.status('404').send('존재하지 않는 사용자입니다.');
        }

        const userFollowers = await user.getFollowers({
            attributes: ['userId', 'userNickname', 'userProfileImage'],
        });

        //  console.log('userFollowers: ', JSON.stringify(userFollowers));

        return res.json(userFollowers);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});

router.delete('/:userId/follower', isLoggedIn, async (req, res, next) => {

    try {
        const user = await db.User.findOne({
            where: {id: req.user.id},
            attributes: ['id'],
        });

        await user.removeFollower(req.params.userId);

        return res.send(req.params.userId);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});

// load other user posts
router.get('/:id/posts/other', async (req, res, next) => {

    console.log('/:id/posts/other req.params: ', req.params);
    // console.log('/:id/posts/other req.user: ', req.user);

    // if(!parseInt(req.params.id) && req.user) {
    //     req.params.id = req.user.id;
    // }

    try {
        const userPosts = await db.Post.findAll({
            where: {
                UserId: parseInt(req.params.id, 10),
                BookmarkId: null,
            },
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
            order: [['createdAt', 'DESC']],
        });

        console.log('/:id/posts/other JSON.stringify(userPosts): ', JSON.stringify(userPosts));

        return res.json(userPosts);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});


router.get('/:userId/followings/other', async (req, res, next) => {

    try {
        const user = await db.User.findOne({
            where: {id: parseInt(req.params.userId, 10) || (req.user.id || 0)},
            attributes: ['id'],
        });

        if (!user) {
            return res.status('404').send('존재하지 않는 사용자입니다.');
        }

        const userFollowings = await user.getFollowings({
            attributes: ['id', 'userNickname'],
        });

        //  console.log('userFollowings: ', JSON.stringify(userFollowings));

        return res.json(userFollowings);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});

router.get('/:userId/followers/other', async (req, res, next) => {

    try {
        const user = await db.User.findOne({
            where: {id: parseInt(req.params.userId, 10) || (req.user.id || 0)},
            attributes: ['id'],
        });

        if (!user) {
            return res.status('404').send('존재하지 않는 사용자입니다.');
        }

        const userFollowers = await user.getFollowers({
            attributes: ['id', 'userNickname'],
        });

         console.log('/:userId/followers/other: ', JSON.stringify(userFollowers));

        return res.json(userFollowers);

    } catch (e) {
        console.error(e);
        return next(e);
    }

});


// load other profile user info
router.get('/:id/other', async (req, res, next) => {

    // const test = req.params.id || req.user.id;
    // console.log('routes/user... load user info... req.user: ', req.user);
    // console.log('routes/user... load user info... req.params: ', req.params);
    // console.log('routes/user... load user info... test: ', test);

    try {

        const anUserInfo = await db.User.findOne({
            where: {
                id: parseInt(req.params.id),
            },
            include: [{
                model: db.Post,
                attributes: ['id'],
            }],
            attributes: ['id', 'userNickname', 'userProfileImage'],
        });

        console.log('JSON.stringify(anUserInfo): ', JSON.stringify(anUserInfo));

        const jsonAnUserInfo = anUserInfo.toJSON();
        jsonAnUserInfo.Posts = jsonAnUserInfo.Posts ? jsonAnUserInfo.Posts.length : 0;

        res.json(jsonAnUserInfo);

    } catch (e) {
        console.error(e);
        next(e);
    }

});

router.post('/profile/image', isLoggedIn, upload.single('image'), async(req, res, next) => {
    try {

        console.log('req.file: ', req.file);


        await db.User.update({ userProfileImage: req.file.filename}, {
            where: {
                id: req.user.id,
            },
        });

        const updatedUser = await db.User.findOne({
            where: {
                id: req.user.id,
            },
            attributes: ['id', 'userProfileImage'],
        });

        // console.log('updatedUser: ', JSON.stringify(updatedUser));

        return res.json(updatedUser);

    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;