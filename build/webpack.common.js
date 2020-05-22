const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'vue.js'),
    output:{
        filename:'vue.min.js',
        path: path.resolve(__dirname,'dist')
    }
}