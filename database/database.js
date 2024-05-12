// ORM


let id = 0;
function generateId() {
  id++;

  return id;
}

function Post(title, body, author) {
  this.id = generateId();
  this.title = title;
  this.body = body;
  this.author = author;
}

const posts = [
  new Post("Title 1", "Body 1", "John Doe"),
  new Post("Title 2", "Body 2", "Bill Gates"),
  new Post("Title 3", "Body 3", "Steve Jobs"),
];

console.log(posts);

// CRUD operations

// C - Create
function databaseCreatePost(title, body, author) {
  const post = new Post(title, body, author);
  posts.push(post);
  return post;
}

// R - Read
function databaseReadPost(id) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      return posts[i];
    }
  }

  return null;
}

// U - Update
function databaseUpdatePost(id, title, body, author) {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      posts[i].title = title;
      posts[i].body = body;
      posts[i].author = author;
      return posts[i];
    }
  }

  return null;
}

// D - Delete
function databaseDeletePost(id) {
  let isFound = false;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      isFound = true;
    }

    if (isFound) {
      posts[i] = posts[i + 1];
    }
  }

  if (isFound) {
    posts.pop();
  }
}

// CommonJS

/*
module.exports = {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
};
*/

// ESModules

export {
  databaseCreatePost,
  databaseReadPost,
  databaseUpdatePost,
  databaseDeletePost,
};