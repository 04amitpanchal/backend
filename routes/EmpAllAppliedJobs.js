var emp=require('../model/EmpAppliedJobs');
var express=require('express');
var route=express.Router();

route.get('/:id?',function(req,res,next){
    emp.getAllEmpAppliedJobs(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;