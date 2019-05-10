var admin=require('../model/empProfileDetails');
var express=require('express');
var route=express.Router();



route.put('/:id',function(req,res,next){
    admin.changePassword(req.body,req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports=route;