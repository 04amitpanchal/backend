var recNotification=require('../model/rec_notification');
var express=require('express');
var route=express.Router();

route.post('/',function(req,res,next){
    recNotification.getAllDataForRecNotification(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});




module.exports=route;