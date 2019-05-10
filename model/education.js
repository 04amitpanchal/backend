var db=require('../dbconnection');
var education={

        getAllEducation:function(callback){
         return db.query("select * from education_tbl",callback);
        },    

        deleteEducation:function(id,callback){
            return db.query('delete from education_tbl where edu_id=?',
            [id],
            callback);
        },

        addEducation:function(item,callback){
            return db.query('insert into education_tbl(fk_emp_id,emp_qual,emp_pass_year,emp_uni,emp_exp,emp_skill1,emp_skill2) values(?,?,?,?,?,?,?)',
            [item.fk_emp_id, item.emp_qual, item.emp_pass_year, item.emp_uni, item.emp_exp, item.emp_skill1, item.emp_skill2],
            callback);
        },

        updateEducation:function(id,item,callback){
            return db.query('update education_tbl set fk_emp_id=?,emp_qual=?,emp_pass_year=?,emp_uni=?,emp_exp=?,emp_skill1=?,emp_skill2=? where edu_id=?',
            [item.fk_emp_id, item.emp_qual, item.emp_pass_year, item.emp_uni, item.emp_exp, item.emp_skill1,item.emp_skill2,id],
            callback);
        },

        getEducationByEducationId:function(id,callback){
            return db.query('select * from education_tbl where edu_id=?',
            [id],
            callback);
        },

        getEducationByEmpid:function(id,callback){
            return db.query('select e.emp_id,edu.edu_id from employee_tbl e,education_tbl edu where e.emp_id=edu.fk_emp_id and edu.fk_emp_id=?',[id],
            callback);
        },
        

        deleteSelectedEducation(item,callback){
            var delArr=[];
            for(i=0;i<item.length;i++){
                delArr[i]=item[i].edu_id;
            }
            return db.query("delete from education_tbl where edu_id in (?)",[delArr],callback);
        },
        getcandidates(callback)
        {
            return db.query("select emp.*,e.* from employee_tbl emp,education_tbl e where emp.emp_id=e.fk_emp_id and e.emp_exp > 3 ",callback);
            console.log();
        },
        getAllEducationByEmpId:function(id,callback){
            return db.query('select * from education_tbl where fk_emp_id=?',
            [id],
            callback);
        }        

}

module.exports=education;