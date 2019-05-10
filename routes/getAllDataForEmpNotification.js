// var empNotification=require('../model/emp_notification');
// var express=require('express');
// var route=express.Router();

// route.post('/',function(req,res,next){
//     console.log("in router");
//     empNotification.getAllDataForEmpNotification(req.body,function(err,rows){
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(rows);
//         }
//     });
// });





// module.exports=route;




var empNotification=require('../model/emp_notification');
var express=require('express');
var route=express.Router();

route.post('/',function(req,res,next){
    empNotification.getAllDataForEmpNotification(req.body,function(err,rows){
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});




module.exports=route;