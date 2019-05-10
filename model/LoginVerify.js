var db=require('../dbconnection');
var Login={

    loginVerify:function(item,callback){
        // console.log(item.username);
        // console.log(item.password);
        return db.query("select rec_id,password from recruiter_tbl where rec_id=? and password=?",
        [item.rec_id,item.password],callback);
    },
    loginVerifyEmp:function(item,callback){
        console.log(item.emp_id,item.emp_password);
        return db.query("select emp_id,emp_password from employee_tbl where emp_id=? and emp_password=?",
        [item.emp_id,item.emp_password],callback);
    },
    sendPassword:function(id,callback){
        return db.query("select password from admin where username=?",
        [id],callback);
        
    }
    
}

module.exports=Login;