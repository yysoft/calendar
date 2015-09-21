var Sequelize=require('sequelize');
var sequelize=require('../database');

var Event=sequelize.define('Event',{
    id:{type:Sequelize.BIGINT(20),required:true,autoIncrement:true,primaryKey:true},
    uid:{type:Sequelize.INTEGER(20),required:true},
    name:{type:Sequelize.STRING(250),required:true},
    gmt_start:{type:Sequelize.DATE,required:true},
    gmt_end:Sequelize.DATE,
    start_time:Sequelize.INTEGER,
    end_time:Sequelize.INTEGER,
    gmt_created:{type:Sequelize.DATE,defaultValue:Sequelize.NOW,required:true},
    gmt_modified:{type:Sequelize.DATE,defaultValue:Sequelize.NOW,require:true},
    content:Sequelize.TEXT,
    calendar_id:{type:Sequelize.INTEGER(20),required:true,defaultValue:0},
    location:Sequelize.STRING(100),
    location_map_x:Sequelize.STRING(100),
    location_map_y:Sequelize.STRING(100),
    rule:{type:Sequelize.STRING(250),required:true},
    series_id:{type:Sequelize.BIGINT(20),required:true,defaultValue:0},
    color:Sequelize.STRING(45),
    repeat_over:{type:Sequelize.INTEGER,defaultValue:0},
    repeat_until:Sequelize.DATE,
    idle:{type:Sequelize.INTEGER,defaultValue:0}
});

Event.sync();

module.exports=Event;