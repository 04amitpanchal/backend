var admin=require('../model/apply');
var express=require('express');
var route=express.Router();

route.delete('/:id',function(req,res,next){
    admin.deletejob(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});



module.exports=route;