const express = require('express');
const db = require('./models/index');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport/index');

const app = express();

db.sequelize.sync();

passportConfig();

app.use(morgan('dev'));
app.use('/fileslist', express.static('uploads'));
app.use(cors({
    origin: true,
    credentials: true,
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,

    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'cookieName',

}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    // console.log('back/index... req.user: ', req.user);
    // console.log('back/index... req.session: ', req.session);
    res.send('hello server');
});

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(process.env.NODE_ENV === 'production' ? process.env.PORT : 8080, () => {
    console.log(`server is running on ${process.env.PORT}`);
});