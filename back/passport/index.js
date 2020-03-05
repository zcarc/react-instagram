const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

module.exports = () => {

    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
    }, (id, password, done) => {
        console.log('LocalStrategy id: ', id);
    }));

};