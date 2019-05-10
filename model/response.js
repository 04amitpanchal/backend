var db=require('../dbconnection');
var response={

        getAllResponse:function(callback){
            return db.query("select * from response_tbl",callback);
        },
        deleteResponseByResponseId:function(id,callback){
            return db.query('delete from response_tbl where res_id=?',
            [id],
            callback);
        },
        addResponse:function(item,callback){
            return db.query('insert into response_tbl(fk_apply_id,res_status,res_desc) values(?,?,?)',
            [item.fk_apply_id,item.res_status,item.res_desc],
            callback);
        },    
        updateResponse:function(id,item,callback){
            return db.query('update response_tbl set fk_apply_id=?,res_status=?,res_desc=? where res_id=?',
            [item.fk_apply_id,item.res_status,item.res_desc,id],
            callback);
        },
        getResponseByResponseId:function(id,callback){
            return db.query('select * from response_tbl where res_id=?',
            [id],
            callback);
        },
        deleteSelectedResponse(item,callback){
            var delArr=[];
            for(i=0;i<item.length;i++){
                delArr[i]=item[i].res_id;
            }
            return db.query("delete from response_tbl where res_id in (?)",[delArr],callback);
        },
        

}

module.exports=response;







