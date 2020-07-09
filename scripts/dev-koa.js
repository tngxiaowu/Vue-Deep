// 引入依赖
const  path = require('path'),
    koa = require('koa'),
    serve = require('koa-static');

const app = new koa(); // 实例化koa
const rootPath =  path.join(__dirname + '/../dist'); // 指定静态资源路径
// 指定静态服务目录
app.use(serve(rootPath));
app.listen(3000,()=> {
    console.log(`Koa Serave is running at Port:3000`);
});