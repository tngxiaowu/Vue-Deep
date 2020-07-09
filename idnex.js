// import { add } from './add.js';
// add(1,2);

import('./math').then((add) => {
    console.log(add(1, 2))
  })