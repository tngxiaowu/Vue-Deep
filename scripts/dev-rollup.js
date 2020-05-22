const execa = require('execa'); // node execa模块
const { target } = require('./utils');

// 执行rollUp
execa('rollup',[ '-wc','--environment',`TARGET:${target},FORMATS:umd`],{ stdio:'inherit'});