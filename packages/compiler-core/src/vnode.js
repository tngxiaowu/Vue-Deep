

export const Comment = Symbol('Comment')

const normalizeChildren = () =>{
    console.log('Hello! I am ready to write');
}


export const createVNode = (type,props = null , children = null,patchFlag = 0,dynamicProps = null) =>{
    // 校验type类型 如果没有 默认为Comment
    if(!type){
        console.log(`Invalid vnode Type`)
        type = Comment;
    }

    // 如果传入的参数不为空
    if(props != null){

    }
    
    // 将VnodeType编译成bitmap
    const shapeFlag = null;

    // 定义了一个Vnode对象
    const vnode = {
        _isVNode: true, // 判断是否为VNode
        type, // vnode类型
        props, // 处理后的参数
        // key: (props !== null && props.key) || null,
        // ref: (props !== null && props.ref) || null,
        // scopeId: currentScopeId, 暂时忽略
        children: null,
        component: null, // 组件实例
        // suspense: null,
        // dirs: null,
        // transition: null,
        // el: null,
        // anchor: null,
        // target: null,
        shapeFlag, 
        patchFlag, // 默认为0
        dynamicProps, 
        dynamicChildren: null, 
        appContext: null
      }

    // 初始化子元素
    normalizeChildren();

    return vnode;

}