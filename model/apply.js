var db=require('../dbconnection');
var url="mongodb://localhost:27017/myjob";
var applyJob={

        getAllDetails:function(callback){
                return db.query("select * from apply_tbl ",callback);
        },
        getByidDetails:function(id,callback){
                return db.query("select * from apply_tbl where apply_id=? ",[id],callback);
        },
        getByidforupdateDetails:function(id,callback){
                return db.query("select * from apply_tbl where apply_id=? ",[id],callback);
        },
        removeapply(item,callback){
                var delArr=[];
                for(i=0;i<item.length;i++){
                    delArr[i]=item[i].apply_id;
                }
                return db.query("delete from apply_tbl where apply_id in (?)",[delArr],callback);
        },
        addApply:function(item,callback){
            
            return  db.query("insert into apply_tbl (fk_emp_id,fk_job_id,apply_date) values(?,?,?)",
            [item.fk_emp_id,item.fk_job_id,item.apply_date],
            callback);
        },
        updateApply:function(item,callback){
                console.log(item.apply_date);
                return db.query('update apply_tbl set fk_emp_id=?,fk_job_id=?,apply_date=? where apply_id=?',
                [item.fk_emp_id,item.fk_job_id,item.apply_date,item.apply_id],
                callback);
         },
         deletejob:function(id,callback)
         {
                 return url.query("delete from first where username=?",[id],callback);
         }
    

        

}

module.exports=applyJob;