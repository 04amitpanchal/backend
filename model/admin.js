var db=require('../dbconnection');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var ad={

    getrecDetailsById:function(id,callback){
        console.log(id);
        db.query("select  * from recruiter_tbl where rec_id=?",[id],callback);
    },
    getCompanyType:function(callback){
        // console.log(id);
        db.query("select DISTINCT company_type from recruiter_tbl",callback);
    },
    getSpeCompany:function(id,callback){
        console.log(id);
        // var x=item;
        // var x=item.company_type;
        // console.log(x);
        db.query("select * from recruiter_tbl where company_type=?",[id],callback);
    },
    getAllRec:function(callback){
        console.log("called");
        return db.query("select *  from recruiter_tbl",callback);
    },
    getAllEmp:function(callback){
        return db.query("select * from employee_tbl",callback);
    },
    getEmpDetailsById:function(id,callback){
        console.log(id);
        db.query("select  * from employee_tbl where emp_id=?",[id],callback);
    },
    removeRec(item,callback){
        var delArr=[];
        for(i=0;i<item.length;i++){
            delArr[i]=item[i].rec_id;
        }
        return db.query("delete from recruiter_tbl where rec_id in (?)",[delArr],callback);
    },
    removeEmp(item,callback){
        var delArr=[];
        for(i=0;i<item.length;i++){
            delArr[i]=item[i].emp_id;
        }
        return db.query("delete from employee_tbl where emp_id in (?)",[delArr],callback);
    },
    Addrec:function(item,filename,callback){
       return db.query('insert into recruiter_tbl values(?,?,?,?,?,?,?,?) ',
        [item.rec_id,item.password,item.company_name,item.company_web,item.adderess,item.company_type,filename,item.com_desc],callback);
    },
    updaterec:function(item,filename,callback){
        return db.query('update recruiter_tbl set password=?,company_name=?,company_web=? ,adderess=?,company_type=?,rec_photo=?  where rec_id=?',
        [item.password,item.company_name,item.company_web,item.adderess,item.company_type,filename,item.rec_id],
        callback);
    },
    updateEmpDetails:function(item,filename,callback){
        return db.query('update employee_tbl set emp_password=?,first_name=?,last_name=?,country=?,state=?,city=?,emp_field=?,emp_photo=? where emp_id=?',
        [item.emp_password,item.first_name,item.last_name,item.country,item.state,item.city,item.emp_field,filename,item.emp_id],callback
    );
    },
    AddEmp:function(item,filename,callback){


        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(item.password, salt, function(err, hash) {
                // Store hash in your password DB.
            });
        });
        




        return db.query('insert into employee_tbl values(?,?,?,?,?,?,?,?,?,?,?)',  
        [item.emp_id,item.emp_password,item.first_name,item.last_name,item.Gender,item.country,item.state,item.city,item.emp_field,filename,item.emp_desc],callback
    );
    },
    Adminverify:function(item,callback){
        return  db.query('select username,password from admin where username=? and password=?',
        [item.username,item.password],
        callback);
    },
    updaterecpassword:function(item,callback)
    {
        console.log(item.new_password);
        return db.query('update recruiter_tbl set password=? where rec_id=?',[item.password,item.rec_id],callback);
    },
    getcompanyname:function(callback)
    {
        return db.query('select company_name,rec_photo from recruiter_tbl',callback);
    },
    
    relatedcandidates:function(id,callback)
    {
        return db.query('select e.*,r.company_type from employee_tbl e,recruiter_tbl r where e.emp_field=r.company_type and r.company_type=?',[id],callback);
    },
    addCv:function(item,filename,callback)
    {
        return db.query('insert into employee_cv(fk_emp_id,emp_cv) values(?,?)',[item.fk_emp_id,filename],callback);
    },
    getcv:function(id,callback)
    {
        return db.query('select * from employee_cv where fk_emp_id=?',[id],callback);
    }
    

  


}

module.exports=ad;