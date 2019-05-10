var admin=require('../model/job');
var express=require('express');
var route=express.Router();

route.get('/',function(req,res,next){
    admin.getjobdetails(function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.put('',function(req,res,next){
    admin.updateJob(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});



module.exports=route;