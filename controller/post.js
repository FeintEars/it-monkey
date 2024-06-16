import {
  serviceCreatePost,
  serviceReadPost,
  serviceUpdatePost,
  serviceDeletePost
} from '../service/post.js';


function controllerCreatePost(title, body, author) {
  return serviceCreatePost(title, body, author);
}


function controllerReadPost(id) {
  return serviceReadPost(id);
}


function controllerUpdatePost(id, title, body) {
  const updatePost = serviceUpdatePost(id, title, body);

  if (updatePost === null) {
    console.log('Post not found.');
    return null;
  }

  return updatePost;
}

function controllerDeletePost(id) {
  return serviceDeletePost(id);
}



export {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost
};