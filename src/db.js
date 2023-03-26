const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'graphql_express',
    host: 'localhost',
    dialect: 'mysql',
    password: 'root',
    port: '3306',
    username: 'root',
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("./user.model.js")(sequelize, Sequelize);
module.exports = db;