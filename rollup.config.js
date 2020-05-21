import babel from 'rollup-plugin-babel';

const options = {
    input:'packages/index.js',
    output:{
        file: 'main.js',
        format:'iife',
        name:'Global'
    },
    plugins:[
        babel()
        
    ]
}

export default options;