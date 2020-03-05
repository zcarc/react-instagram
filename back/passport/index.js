const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const db = require('../models/index');
const bcrypt = require('bcrypt');

module.exports = () => {

    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'userPassword',
    }, async (userId, userPassword, done) => {
        console.log('LocalStrategy userId: ', userId);
        console.log('LocalStrategy userPassword: ', userPassword);

        try {

            // if not exists
            const user =  await db.User.findOne({
                where: {userId}
            });

            // console.log('#user: ', user);
            // console.log('#user.id: ', user && user.id);
            // console.log('#user.toJSON(): ', user && user.toJSON());

            if(!user) {
                return done(null, false,  { reason: '존재하지 않는 사용자입니다.' });
            }

            // result type: boolean
            const result = await bcrypt.compare(userPassword, user.userPassword);
            // console.log('#result: ', result);

            if(result) {
                return done(null, user);
            }

            console.log('비밀번호가 다릅니다.');
            return done(null, false,  { reason: '비밀번호가 다릅니다.' });

            // done(null, { userId, userPassword });

        }catch (e) {
            console.error(e);
            return done(e);
        }
    }));

};