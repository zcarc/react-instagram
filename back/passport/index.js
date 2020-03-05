const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const db = require('../models/index');

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

            console.log('#user.toJSON(): ', user && user.toJSON());

            // done(null, { userId, userPassword });

        }catch (e) {

        }
    }));

};