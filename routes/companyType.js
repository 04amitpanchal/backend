var admin=require('../model/admin');
var express=require('express');
var route=express.Router();

route.get('/',function(req,res,next){
    admin.getCompanyType(function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;