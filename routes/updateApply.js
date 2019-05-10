var admin=require('../model/apply');
var express=require('express');
var route=express.Router();


route.put('',function(req,res,next){
    admin.updateApply(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.get('/:id',function(req,res,next){
    admin.getByidforupdateDetails(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;