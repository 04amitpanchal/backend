var admin=require('../model/admin');
var express=require('express');
var route=express.Router();



route.delete('/:id',function(req,res,next){
    admin.removeEmp(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;