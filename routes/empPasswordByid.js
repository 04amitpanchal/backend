var admin=require('../model/empTask');
var express=require('express');
var route=express.Router();



route.post('/',function(req,res,next){
    admin.getEmppasswordid(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;