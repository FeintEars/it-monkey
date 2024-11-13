import {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
} from "../service/post.js";

// C - Create
async function controllerCreatePost(title: string, body: string, authorId: number) {
  return serviceCreatePost(title, body, authorId);
}

// R - Read
async function controllerReadPost(id: number) {
  return serviceReadPost(id);
}

// U - Update
async function controllerUpdatePost(id: number, title: string, body: string) {
  const updatePost = serviceUpdatePost(id, title, body);

  return updatePost;
}

// D - Delete
async function controllerDeletePost(id: number) {
  return serviceDeletePost(id);
}

export {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost,
};
