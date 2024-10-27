import {} from //serviceCreatePost,
//serviceReadPost,
//serviceUpdatePost,
//serviceDeletePost,
"../service/post.js";

// C - Create
/*
async function controllerCreatePost(title: string, body: string, author: User) {
  return serviceCreatePost(title, body, author);
}*/

// R - Read
/*
async function controllerReadPost(id: number) {
  return serviceReadPost(id);
}*/

// U - Update
/*
async function controllerUpdatePost(id: number, title: string, body: string) {
  const updatePost = serviceUpdatePost(id, title, body);

  if (updatePost === null) {
    console.log("Post not found.");
    return null;
  }

  return updatePost;
}*/

// D - Delete
/*
async function controllerDeletePost(id: number) {
  return serviceDeletePost(id);
}*/

export //controllerCreatePost,
//controllerReadPost,
//controllerUpdatePost,
//controllerDeletePost,
 {};
