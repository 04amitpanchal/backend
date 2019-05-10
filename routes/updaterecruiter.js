var admin=require('../model/admin');
var express=require('express');
var route=express.Router();


route.put('/:id',function(req,res,next){
    admin.updateRecruiter(req.body,req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.post('/',function(req,res,next){
    admin.updaterecpassword(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});



module.exports=route;