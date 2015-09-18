var loginRouter=require('./login');
var Event=require('../models/events-model');

module.exports=function(server){
    "use strict";

    server.get('/',function(req,res){
        res.render('index',{
            title:'日历'
        });
    });

    server.use('/login',loginRouter);

};