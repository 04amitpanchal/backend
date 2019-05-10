var admin=require('../model/admin');
var express=require('express');
var route=express.Router();



route.post('/',function(req,res,next){
    admin.Adminverify(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;