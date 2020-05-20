// 引入execa模块
const execa = require('execa');

// file(文件) arguments（参数） options（配置项）
// 执行excua模块
execa('rollup',[ '-wc','--environment',`FORMATS:umd`],{ stdio:'inherit'});