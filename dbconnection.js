var mysql=require('mysql');
var connection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'myjobab'
});

module.exports=connection;