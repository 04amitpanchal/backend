var admin=require('../model/response');
var express=require('express');
var route=express.Router();

route.delete('/:id',function(req,res,next){
    admin.deleteResponseByResponseId(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.post('/',function(req,res,next){
    admin.addResponse(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.put('/:id',function(req,res,next){
    admin.updateResponse(req.params.id,req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.get('/',function(req,res,next){
    admin.getAllResponse(function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports=route;