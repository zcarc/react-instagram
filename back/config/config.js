const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "development": {
    "username": "react_user",
    "password": process.env.DB_password,
    "database": "react",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": "0"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
