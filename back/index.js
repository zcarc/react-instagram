const express = require('express');
const db = require('./models/index');
const userAPIRouter = require('./routes/user');
const morgan = require('morgan');
const cors = require('cors');
const passportConfig = require('./passport/index');

const app = express();

db.sequelize.sync();

passportConfig();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/api/user', userAPIRouter);

app.listen(8080, () => {
    console.log('server is running on http://localhost:8080');
});