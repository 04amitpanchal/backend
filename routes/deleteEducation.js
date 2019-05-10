var admin=require('../model/education');
var express=require('express');
var route=express.Router();



route.delete('/:id',function(req,res,next){
    admin.deleteEducation(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.post('/',function(req,res,next){
    admin.deleteSelectedEducation(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


module.exports=route;