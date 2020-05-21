const baseCreateApp = () =>{
    console.log(`I am base CreateApp`);
}

export const createRenderer = () =>{
    return {
        baseCreateApp
    }
}