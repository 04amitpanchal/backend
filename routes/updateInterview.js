var admin=require('../model/interview');
var express=require('express');
var route=express.Router();


route.put('',function(req,res,next){
    admin.updateinterview(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.get('/:id',function(req,res,next){
    admin.getidByForInterview(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;