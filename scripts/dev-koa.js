// 引入依赖
const  path = require('path'),
    Koa = require('koa'),
    serve = require('koa-static'),

const app = new Koa(); // 实例化koa
const rootPath =  path.join(__dirname + '/../dist');
// 指定静态服务目录
app.use(serve(rootPath));
app.listen(3000);