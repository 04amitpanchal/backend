var db=require('../dbconnection');
var empTask={

        getEmpDetailsById:function(id,callback){
            db.query("select * from employee_tbl where emp_id=?",[id],callback);
        },
        getEmppasswordid:function(item,callback){
            db.query("select emp_password from employee_tbl where emp_id=?",[item.emp_id],callback);
        },
        getEmpFieldByempId:function(id,callback){
            db.query("select emp_field from employee_tbl where emp_id=?",[id],callback);
        },
        
}

module.exports=empTask;