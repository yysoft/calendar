
module.exports=function(server){
    "use strict";

    server.get('/',function(req,res){
        res.render('index',{
            title:'日历'
        });
    });
};