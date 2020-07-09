// 采用了
function createGetter(){
    return  get(target,key,receiver){
        const res = Reflect.get(target,key,receiver)

        // todo 

        return res;
    }
}


// 好像可以这样写
这么写么

function createSetter(){
    return function set( targer,key,value,receiver){
        const res = Reflect.set(target,key,value,receiver)

        // todo

        return res;
    }

}

const set = createGetter()
const get = createSetter()


export const baseHandler ={
    set,
    get,
}