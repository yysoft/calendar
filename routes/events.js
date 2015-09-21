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
    var now=Date.now();
    req.body.gmt_created=now;
    req.body.gmt_modified=now;

    Event
        .build()
        .save()
        .then(function(err,event){
            if(!err){
                res.json(event);
            }
        });
});

eventsRouter.get('/:eventId',function(req,res){
    "use strict";

});

eventsRouter.put('/:eventId',function(req,res){
    "use strict";

});

eventsRouter.delete('/:eventId',function(req,res){
    "use strict";

});