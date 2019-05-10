var admin=require('../model/education');
var express=require('express');
var route=express.Router();



route.post('/',function(req,res,next){
    admin.addEducation(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});



route.put('/:id',function(req,res,next){
    admin.updateEducation(req.params.id,req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


route.get('/',function(req,res,next){
    admin.getAllEducation(function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;
