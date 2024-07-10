import { User } from "../database/user.js";
import {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
} from "../service/post.js";

// C - Create
async function controllerCreatePost(title, body, author) {
  if (author instanceof User === false) {
    console.log("Author must be an instance of User.");
    return null;
  }

  return serviceCreatePost(title, body, author);
}

// R - Read
async function controllerReadPost(id) {
  return serviceReadPost(id);
}

// U - Update
async function controllerUpdatePost(id, title, body) {
  const updatePost = serviceUpdatePost(id, title, body);

  if (updatePost === null) {
    console.log("Post not found.");
    return null;
  }

  return updatePost;
}

// D - Delete
async function controllerDeletePost(id) {
  return serviceDeletePost(id);
}

export {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost,
};
