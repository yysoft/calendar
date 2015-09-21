var Sequelize=require('sequelize');
var sequelize=require('../database');

var Calendar=sequelize.define('Calendar', {
    id: {type: Sequelize.BIGINT(20), required: true, autoIncrement: true, primaryKey: true},
    cid: {type: Sequelize.INTEGER(20), required: true, defaultValue: 0},
    uid_created: {type: Sequelize.INTEGER(20), required: true, defaultValue: 0},
    uid_owner: {type: Sequelize.INTEGER(20), required: true, defaultValue: 0},
    name: {type: Sequelize.STRING(250), required: true, defaultValue: ''},
    remark: {type: Sequelize.STRING(250), defaultValue: ''},
    access_level: {type: Sequelize.STRING(45), defaultValue: ''},
    color:{type:Sequelize.STRING(45),defaultValue:'#f0f0f0'},
    gmt_created:{type:Sequelize.DATE,defaultValue:Sequelize.NOW},
    gmt_modified:{type:Sequelize.DATE,defaultValue:Sequelize.NOW}
});

Calendar.sync();

module.exports=Calendar;