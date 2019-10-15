const Koa=require("koa")

const app = new Koa()

const path=require("path")
const router=require("./router")
const koastatic=require("koa-static")
const bodyparser=require("koa-bodyparser")

const staticpublic=koastatic(path.join(process.cwd(),"public"))

app.use(bodyparser())

app.use(router.routes())

app.use(staticpublic)
app.listen(3000,()=>{
    console.log("服务器已启动");
})