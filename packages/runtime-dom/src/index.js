import { createRenderer } from '../../compiler-core/src/index.js';

const { baseCreateApp } = createRenderer()

export const createApp = (...args) =>{
    const app = baseCreateApp(...args);
    const { mount } = app;
    app.mount = () =>{
    }
    return app;
}