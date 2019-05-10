var empNotification=require('../model/emp_notification');
var express=require('express');
var route=express.Router();

route.get('/:id?',function(req,res,next){
    empNotification.getResByApplyId(req.params.id,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

route.post('/',function(req,res,next){
    empNotification.addEmpNotification(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});





module.exports=route;