const passport = require('passport');
const {Strategy: LocalStrategy} = require('passport-local');
const db = require('../models/index');
const bcrypt = require('bcrypt');

module.exports = () => {

    passport.serializeUser((user, done) => {
        // console.log('serializeUser()... user: ', user);
        // console.log('serializeUser()... user.id: ', user.id);

        return done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            // console.log('deserializeUser...');
            // console.log('deserializeUser id: ', id);

            const user = await db.User.findOne({
                where: {id},
            });

            // console.log('deserializeUser user.toJSON(): ', user && user.toJSON());
            done(null, user);

        } catch (e) {
            console.error(e);
            return done(e);
        }
    });

    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'userPassword',
    }, async (userId, userPassword, done) => {
        // console.log('LocalStrategy userId: ', userId);
        // console.log('LocalStrategy userPassword: ', userPassword);

        try {

            // throw new Error('에러');

            // if not exists
            const user = await db.User.findOne({
                where: {userId}
            });

            // console.log('#user: ', user);
            // console.log('#user.id: ', user && user.id);
            // console.log('#user.toJSON(): ', user && user.toJSON());

            if (!user) {
                return done(null, false, {reason: '존재하지 않는 사용자입니다.'});
            }

            // result type: boolean
            const result = await bcrypt.compare(userPassword, user.userPassword);
            // console.log('#result: ', result);

            if (result) {
                return done(null, user);
            }

            // console.log('비밀번호가 다릅니다.');
            return done(null, false, {reason: '비밀번호가 다릅니다.'});

        } catch (e) {
            console.error(e);
            return done(e);
        }
    }));

};