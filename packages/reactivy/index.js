// 入口文件(暴露所有API)
export const reactive = (target) => {
    console.log('reactive 待填坑');

    return createReactiveObject(target,{
        get(){

        },
        set(){

        }
    })
}

function createReactiveObject(target, baseHandler){
    // 判断是不是对象
    const observed =  new Proxy(target, baseHandler)

}

