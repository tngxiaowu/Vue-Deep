import { createAppAPI } from './apiCreateApp';
import { flushPostFlushCbs } from './scheduler'

export const createRenderer = () =>{
    function patch(){

    }

    function unmount(){
        
    }

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