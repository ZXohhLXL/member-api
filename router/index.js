const router =require("koa-router")();
const query=require("../db/query")
//查询成员信息

router.get("/userlist",async (ctx)=>{
   let data=await query('select * from userlist')
   console.log(data);
   
   ctx.body=data
})
module.exports=router 