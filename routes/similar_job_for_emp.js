var admin=require('../model/similar_job_for_emp');
var express=require('express');
var route=express.Router();



route.get('/:id?',function(req,res,next){
    admin.similarJobEmp(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;