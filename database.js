var Sequelize=require('sequelize');
var config=require('./config.json');
var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.server,
    dialect: 'mysql',
    pool:config.pool
});

module.exports=sequelize;