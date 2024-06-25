import {
  controllerCreatePost,
  // eslint-disable-next-line no-unused-vars
  controllerReadPost,
  // eslint-disable-next-line no-unused-vars
  controllerUpdatePost,
  // eslint-disable-next-line no-unused-vars
  controllerDeletePost,
} from "./controller/post.js";

// Frontend developer.
const post1 = controllerCreatePost("Title 4", "Body 4", "Obby van Buren");
console.log(post1);
