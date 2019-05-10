var http=require('http');
var fs=require('fs');
var querystring=require('querystring');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/myjob";
var express=require('express');
// var route=express.Router();
http.createServer(function(req,res){
    if (req.url === "/") {
      res.writeHead(200,{"Content-Type":"text/html"});
      fs.createReadStream("./forms.html","UTF-8").pipe(res);  

      if (req.method==="POST") {
        var data="";
        req.on("data",function(chunk){
            data+=chunk;
        });
        req.on("end",function(chunk){
            var q=querystring.parse(data);
            MongoClient.connect(url,function(err,db){
                // if (err) thorw err;
                var q=querystring.parse(data);
                db.collection('first').insertOne(q,function(err,res){
                    // if(err) thorw err;
                    console.log("data inserted "+res);
                    db.close();
                    console.log(q);
                });
            })
            
                        
        });
    }

    }

    if (req.url === "/delete") {
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./forms.html","UTF-8").pipe(res);  
  
        if (req.method==="DELETE") {
          var data="";
          req.on("data",function(chunk){
              data+=chunk;
          });
          
      }
  
      }
  

    
}).listen(4000);