var db=require('../dbconnection');
var empprofile={

    getEmpProfile(id,callback)
    {
        return db.query("select emp.*,e.* from employee_tbl emp,education_tbl e where emp.emp_id=e.fk_emp_id and emp.emp_id=?",[id],callback);
        console.log();
    },
    changePassword:function(item,id,callback){
        return db.query('update employee_tbl set emp_password=? where emp_id=?',
        [item.emp_password,id],
        callback);
    },
        
}

module.exports=empprofile;







