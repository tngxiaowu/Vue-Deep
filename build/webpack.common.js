const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'hello.js'),
    output:{
        filename:'hello.min.js',
        path: path.resolve(__dirname,'dist')
    }
}