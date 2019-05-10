var db=require('../dbconnection');
var empAppliedJobs={

        getAllEmpAppliedJobs:function(id,callback){
                return db.query('select j.job_id,j.fk_rec_id,j.job_title,j.fk_company_name,a.fk_emp_id,a.fk_job_id,a.apply_date,e.emp_id,e.first_name,e.last_name,e.emp_photo from job_tbl j,apply_tbl a,employee_tbl e where j.job_id=a.fk_job_id and a.fk_emp_id=? and e.emp_id=?',[id,id],callback);
        },

        getAllEmpAppliedJobsForEmp:function(id,callback){
                return db.query('select a.apply_id,a.fk_emp_id,a.fk_job_id , j.*,r.company_name,r.rec_id,r.rec_photo from apply_tbl a,job_tbl j, recruiter_tbl r where a.fk_job_id=j.job_id and j.fk_rec_id=r.rec_id and a.fk_emp_id=?',[id,id],callback);
        }
        

}

module.exports=empAppliedJobs;