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
} from './controller/post.js';



