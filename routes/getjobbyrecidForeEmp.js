var admin=require('../model/job');
var express=require('express');
var route=express.Router();



route.post('/:id?',function(req,res,next){
    console.log("Hii");
    admin.getjobbyrecidForeEmp(req.params.id,req.body,function(err,rows){
        if (err) { 
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;