import { createAppAPI } from './apiCreateApp';
import { flushPostFlushCbs } from './scheduler'

export const createRenderer = () =>{
    function patch(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,optimized){
        // 如果节点n1存在 并且是相同节点
        if(n1 != null && isSameVNodeType(n1,n2)){
            unmount(n1,parentComponent,parentSuspense,true)
        }
        // 如果节点n1不存在 或者 不是相同节点
        const { type , shapeFlag } = n2;
        switch(type){
            case Text:
            processText();
            break;
            case Comment:
            processCommentNode();
            break;
            case Fragment:
            processFragment();
            break;
            case Portal:
            processPortal();
            break;
            default: 
            if(shapeFlag & ShapeFlags.ELEMENT){
                processElement();
            }else if(shapeFlag & ShapeFlags.COMPONENT ){
                processComponent();
            }else if(shapeFlag & ShapeFlags.SUSPENSE){
                process();
            }else if(__dev__){
                warn();
            }
        }
    }

    function unmount(){
        
    }

    // 以及 其他一系列的辅助函数

    const render = ( vnode,container) => {
        if(vnode == null){
            if(container._vnode){
                unmount(container._vnode,null)
            }
        }else{
            patch()
        }
        flushPostFlushCbs()
        container._vnode = vnode; 
    }

    return {
        render,
        baseCreateApp:createAppAPI(render)
    }
}