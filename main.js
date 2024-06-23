import {
  controllerCreatePost,
  // eslint-disable-next-line no-unused-vars
  controllerReadPost,
  // eslint-disable-next-line no-unused-vars
  controllerUpdatePost,
  // eslint-disable-next-line no-unused-vars
  controllerDeletePost,
} from "./controller/post.js";

import {
  controllerCreateUser,
  // eslint-disable-next-line no-unused-vars
  controllerReadUser,
  // eslint-disable-next-line no-unused-vars
  controllerUpdateUser,
  // eslint-disable-next-line no-unused-vars
  controllerDeleteUser,
} from "./controller/user.js";

// Fronteder:
const user1 = controllerCreateUser("John", "Doe", 30);
const user2 = controllerCreateUser("Bill", "Smith", 40);
const post1 = controllerCreatePost("Post 1", "Body 1", user1);
const post2 = controllerCreatePost("Post 2", "Body 2", user1);
const post3 = controllerCreatePost("Post 3", "Body 3", user2);

console.log([user1, user2]);

console.log([post1, post2, post3]);
