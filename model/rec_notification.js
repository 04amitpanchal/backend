var db=require('../dbconnection');
var rec_notification={


        getApplyIdByEmpAndJob:function(item,callback){
            console.log(item);
            return db.query("select apply_id from apply_tbl where fk_emp_id=? and fk_job_id=?",[item.fk_emp_id,item.fk_job_id],callback);
        },

        addRecNotification:function(item,callback){
            return db.query("insert into rec_notification_id(fk_emp_id,fk_job_id,fk_apply_id,fk_rec_id) values(?,?,?,?)",[item.fk_emp_id,item.fk_job_id,item.fk_apply_id,item.fk_rec_id],callback);
        },

        getAllDataForRecNotification:function(item,callback){
            console.log(item);
            return db.query("select e.*,j.*,a.* from employee_tbl e,job_tbl j,apply_tbl a where e.emp_id=? and j.job_id=? and a.apply_id=? and fk_rec_id=?",[item.fk_emp_id,item.fk_job_id,item.fk_apply_id,item.fk_rec_id],callback);
        },

        getAllRecNotification:function(id,callback){
            return db.query("select * from rec_notification_id where fk_rec_id=?",id,callback);
        }

}

module.exports=rec_notification;







