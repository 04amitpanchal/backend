var db=require('../dbconnection');
var similar_job_emp={

        similarJobEmp:function(id,callback){
            return db.query("select j.*,e.* from job_tbl j,employee_tbl e where e.emp_field=j.Job_field and e.emp_id=?",[id],callback);
        },

        AppliedJobIdEmp:function(id,callback){
            return db.query("select fk_job_id from apply_tbl where fk_emp_id=?",[id],callback);
        },
        
}

module.exports=similar_job_emp;







