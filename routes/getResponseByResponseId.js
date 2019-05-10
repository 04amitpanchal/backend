var admin=require('../model/response');
var express=require('express');
var route=express.Router();

route.get('/:id',function(req,res,next){
    admin.getResponseByResponseId(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;