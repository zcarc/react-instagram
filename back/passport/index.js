const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

module.exports = () => {

    passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'userPassword',
    }, (userId, userPassword, done) => {
        console.log('LocalStrategy userId: ', userId);
        console.log('LocalStrategy userPassword: ', userPassword);

        try {

            done(null, { userId, userPassword });

        }catch (e) {

        }
    }));

};