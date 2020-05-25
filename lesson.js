const assert = require('assert');

async function testAssert(ctx){
    assert(ctx,'ctx is vary required');

    console.log(`hello!${ctx}`)
}

testAssert()