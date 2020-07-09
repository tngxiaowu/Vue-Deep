// runtime-core/src/apiCreateApp.ts
export  function createAppAPI(render){
    return function createApp(rootComponents,rootProps){
        const app = {
			_component: rootComponent,
            use(){

            },

            mixin(){

            },

            component(){

            },

            directive(){

            },
		    // mount挂载方法
            mount(rootContainer){
				let isMounted = false; // 判断是否已经加载
				const context = createAppContext(); // 创建执行上下文内容

				if (!isMounted) {
			        const vnode = createVNode(rootComponent, rootProps)
			        vnode.appContext = context
			          
					render(vnode, rootContainer)
								
			        isMounted = true
			        app._container = rootContainer
			        return vnode.component.proxy
				}else if(__DEV__) {
			        console.log(`App has already been mounted. Create a new app instance instead.`)
			    }
            },
						// 一些其他方法
        }
        return app;
    }
}