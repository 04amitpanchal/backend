var applyIdForRecNotification=require('../model/rec_notification');
var express=require('express');
var route=express.Router();

route.post('/',function(req,res,next){
    applyIdForRecNotification.getApplyIdByEmpAndJob(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            console.log(req.body);
            res.json(rows);
        }
    });
});

module.exports=route;