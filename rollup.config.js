import babel from 'rollup-plugin-babel';

const options = {
    input:'packages/index.js',
    output:{
        file: 'main.js',
        format:'es',
        name:'dist'
    },
    plugins:[
        babel()
        
    ]
}

export default options;