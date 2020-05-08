const execa = require('execa');
const { target } = require('./utils');

// 执行rollUp
execa('rollup',[ '-wc','--environment',`TARGET:${target},FORMATS:umd`],{ stdio:'inherit'});