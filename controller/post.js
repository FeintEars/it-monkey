import {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
} from "../service/post.js";

async function controllerCreatePost(title, body, author) {
  return serviceCreatePost(title, body, author);
}

async function controllerReadPost(id) {
  return serviceReadPost(id);
}

async function controllerUpdatePost(id, title, body) {
  const updatePost = serviceUpdatePost(id, title, body);

  if (updatePost === null) {
    console.log("Post not found.");
    return null;
  }

  return updatePost;
}

async function controllerDeletePost(id) {
  return serviceDeletePost(id);
}

export {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost,
};
