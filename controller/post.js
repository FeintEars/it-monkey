import {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost,
} from "../service/post.js";

// C - Create
function controllerCreatePost(title, body, author) {
  const indexOfSpace = author.indexOf(" ");
  if (
    indexOfSpace === -1 ||
    indexOfSpace === 0 ||
    indexOfSpace === author.length - 1
  ) {
    console.log(
      "Author must have a first name and a last name separated by a space.",
    );
    return null;
  }

  return serviceCreatePost(title, body, author);
}

// R - Read
function controllerReadPost(id) {
  return serviceReadPost(id);
}

// U - Update
function controllerUpdatePost(id, title, body) {
  const updatePost = serviceUpdatePost(id, title, body);

  if (updatePost === null) {
    console.log("Post not found.");
    return null;
  }

  return updatePost;
}

// D - Delete
function controllerDeletePost(id) {
  return serviceDeletePost(id);
}

export {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost,
};
