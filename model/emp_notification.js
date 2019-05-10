var db=require('../dbconnection');
var emp_notification={


        getResponseByApplyId:function(id,callback){
            return db.query("select res_id from response_tbl where fk_apply_id=?",id,callback);
        },

        addEmpNotification:function(item,callback){
            return db.query("insert into emp_notification_tbl(fk_res_id,fk_apply_id,fk_job_id,fk_emp_id) values(?,?,?,?)",[item.fk_res_id,item.fk_apply_id,item.fk_job_id,item.fk_emp_id],callback);
        },

        getAllDataForEmpNotification:function(item,callback){
            console.log(item);

            return db.query("select r.*,a.*,j.* from response_tbl r,apply_tbl a,job_tbl j where r.res_id=? and a.apply_id=? and j.job_id=? and fk_emp_id=?",[item.fk_res_id,item.fk_apply_id,item.fk_job_id,item.fk_emp_id],callback);
        },

        getAllEmpNotification:function(id,callback){
            return db.query("select * from emp_notification_tbl where fk_emp_id=?",id,callback);
        }


}

module.exports=emp_notification;







