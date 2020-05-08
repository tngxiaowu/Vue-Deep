import fs from 'fs' // node fs模块
import path from 'path' // node path模块
import ts from 'rollup-plugin-typescript2' // rollup差价 -> ts编译
import replace from '@rollup/plugin-replace' // rollup插件 -> replace
import json from '@rollup/plugin-json' // rollup插件 -> 从json中读取数据

const masterVersion = require('./package.json').version; // 主要版本号
const packagesDir = path.resolve(__dirname,'packages'); // 路径指向 -> packages
const packageDir = path.resolve(packagesDir,process.env.TARGET); // packages下的目标文件

const resolve = p => path.resolve(packageDir,p); // 解析路径函数
const pkg = require(resolve('package.json')); // packages下的目标文件的package.json
const packageOptions = pkg.buildOptions || {}; 

// 这个又是什么鬼
const outputConfigs = {
    'esm-bundler':{},
    'esm-bundler-runtime':{},
    cjs:{},
    global:{},
    esm:{},
}

const defaultForamts = ['esm-bundlers','cjs']; // 默认格式
const inlineForamts = process.env.FORMATS && process.env.FORMATS.split(','); // 内联格式?
const packageFormats = inlineForamts || packageOptions.formats || defaultForamts; // 格式顺序

const packageConfigs = process.env.PROD_ONLY ? [] : packageFormats.map( format =>{
    createConfig(format,outputConfigs[format])
})

// 生产环境配置

export default packageConfigs; // 输出包的配置

