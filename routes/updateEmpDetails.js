var admin=require('../model/admin');
var express=require('express');
var route=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/empPhotoes/')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});    

    route.post('/',upload.single('image'),function(req,res,next){
        admin.updateEmpDetails(req.body,req.file.filename,function(err,rows){
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    });
    

module.exports=route;