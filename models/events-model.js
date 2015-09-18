var Sequelize=require('sequelize');
var sequelize=require('../database');

var Event=sequelize.define('Event',{
    title:{type:Sequelize.STRING,required:true},
    gmt_created:{type:Sequelize.DATE,defaultValue:Sequelize.NOW},
    gmt_modified:{type:Sequelize.DATE,defaultValue:Sequelize.NOW},
    description:Sequelize.TEXT
});

Event.sync({force: true});

module.exports=Event;