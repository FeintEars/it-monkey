import {
  // serviceCreatePost,
  // serviceReadPost,
  // serviceUpdatePost,
  // serviceDeletePost,
} from "../service/post.js";
import { User } from "../database/user.js";
import { PostNotFoundError } from "../errors.js";

// C - Create
/*
async function controllerCreatePost(title: string, body: string, author: User) {
  return serviceCreatePost(title, body, author);
}
*/

// R - Read
/*
async function controllerReadPost(id: number) {
  return serviceReadPost(id);
}
*/

// U - Update
/*
async function controllerUpdatePost(id: number, title: string, body: string) {
  const updatePost = serviceUpdatePost(id, title, body);

  if (updatePost === null) {
    throw new PostNotFoundError(id);
  }

  return updatePost;
}
*/

// D - Delete
/*
async function controllerDeletePost(id: number) {
  return serviceDeletePost(id);
}
*/

export {
  // controllerCreatePost,
  // controllerReadPost,
  // controllerUpdatePost,
  // controllerDeletePost,
};
