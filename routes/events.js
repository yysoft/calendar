var express=require('express');
var Event=require('../models/events-model');
var eventsRouter=express.Router();

/**
 * @description 获取事件列表
 * @param from {String} 起始日期
 * @param to {String} 截止日期
 */
eventsRouter.get('/',function(req,res){
    "use strict";
    var from=new Date(req.params.from);
    var to=new Date(req.params.to);

    Event.findAll({
        where:{
            $or:[
                {
                    gmt_start:{
                        $gte:from,
                        $lte:to
                    }
                },{
                    gmt_end:{
                        $gte:from,
                        $lte:to
                    }
                }
            ]
        }
    }).then(function(err,events){
        if(!err){
            res.json(events);
        }
    })
});

eventsRouter.post('/',function(req,res){
    "use strict";
    //这儿好像数据库会自动生成两个字段 createAt,updateAt
    //是否有必要再手动添加这两个属性
    var now=Date.now();
    req.body.gmt_created=now;
    req.body.gmt_modified=now;

    Event
        .build(req.body)
        .save()
        .then(function(err,event){
            if(!err){
                res.json(event);
            }
        });
});

eventsRouter.get('/:eventId',function(req,res){
    "use strict";

    Event
        .findById(req.params.eventId)
        .then((value) => {
            res.json(value);
        });

});

eventsRouter.put('/:eventId',function(req,res){
    "use strict";

});

eventsRouter.delete('/:eventId',function(req,res){
    "use strict";

});
