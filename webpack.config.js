const path = require('path');

module.exports = {
    mode:'none',
    entry:'./index.js',
    output:{
        filename:'exit.js',
        path: path.resolve(__dirname,'dist')
    }
}