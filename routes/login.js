var express=require('express');
var loginRouter=express.Router();

//登录页面路由
loginRouter.get('/',function(req,res){
    "use strict";
    res.render('login');
});

//提交登录数据
loginRouter.post('/',function(req,res){
    "use strict";

});

module.exports=loginRouter;