var express=require('express');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var path=require('path');
var session=require('express-session');

var morgan=require('morgan');
var route=require('./routes/routes');

var server=express();


//会话管理
server.use(session({
    secret:'SECRET',
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60*60*1000}
}));


//设置路由
route(server);


//设置模版引擎
server.set('views',path.join(__dirname,'views'));
server.set('view engine','ejs');


//挂载中间件
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());

//设置静态文件路径
server.use(express.static(path.join(__dirname,'static')));


// catch 404 and forward to error handler
server.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// 错误处理
// 开发环镜
if (server.get('env') === 'development') {
    server.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// 生产环境错误处理
server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


server.listen(3000,err=>{
    var msg=err||'server start success';
    console.log(msg);
});


module.exports = server;