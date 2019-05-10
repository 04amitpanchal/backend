var db=require('../dbconnection');
var visitor={


    getAllJobPosts:function(jobPost,callback){
        return 
    }

        // getAllInterviewDetails:function(callback){
        //         return db.query("select * from  interview_dtl",callback);
        // },
        // addinterview:function(item,callback){
        //     return  db.query("insert into interview_dtl (fk_emp_id,fk_job_id,fk_rec_id,inter_add,inter_date) values(?,?,?,?,?)",
        //     [item.fk_emp_id,item.fk_job_id,item.fk_rec_id,item.inter_add,item.inter_date],
        //     callback);
        // },
        // updateinterview:function(item,callback){
        //         console.log(item.apply_date);
        //         return db.query('update  interview_dtl set fk_emp_id=?,fk_job_id=?,fk_rec_id=?,inter_add=?,inter_date=? where inter_id=?',
        //         [item.fk_emp_id,item.fk_job_id,item.fk_rec_id,item.inter_add,item.inter_date,item.inter_id],
        //         callback);
        //  },
        //  getidByForInterview:function(id,callback){
        //         return db.query("select * from interview_dtl where inter_id=? ",[id],callback);
        // },
        // removeInterview(item,callback){
        //         var delArr=[];
        //         for(i=0;i<item.length;i++){
        //             delArr[i]=item[i].inter_id;
        //         }
        //         return db.query("delete from interview_dtl where inter_id in (?)",[delArr],callback);
        // }
    
        

}

module.exports=visitor;