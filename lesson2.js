// CommonJS - 2009

/*
const { sum } = require('lodash');
const result = sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);

const {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost
} = require('./controller/controller.js');
*/


// ESModules - 2015
import lodash from 'lodash';
// const result = lodash.sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(result);

import {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost
} from './controller/controller.js';



// Frontend developer.
const post1 = controllerCreatePost("Title 4", "Body 4", "Obby van Buren");
console.log(post1);


// controllerUpdatePost(100, "Title 100", "sdkbsjdfb skdfb skd fgsdj");

/*
const p1 = 3;
const post2 = controllerReadPost(p1);
console.log(post2);
*/




// CommonJS
// 2009
// module.exports + require

// ESModules
// 2015
// export + import
