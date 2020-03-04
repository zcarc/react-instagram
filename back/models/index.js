const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// console.log('models/index... sequelize: ', sequelize);


db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
console.log('models/index... db: ', db);

Object.keys(db).forEach(modelName => {
  console.log('models/index... modelName: ', modelName);

  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
