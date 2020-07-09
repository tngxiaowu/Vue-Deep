import babel from 'rollup-plugin-babel';
import path from 'path';

const options = {
    input:'packages/index.js',
    output:{
        file: './dist/vue.js',
        format:'iife',
        name:'Vue'
    },
    plugins:[
        babel()
        
    ]
}

export default options;