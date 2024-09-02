class NotUserError extends Error {
  constructor() {
    super("Author is not an User instance");
    this.name = "not-user-error";
  }
}

class UserNotFoundError extends Error {
  constructor(id) {
    super(`User ${id} not found`);
    this.name = `user-not-found`;
  }
}

class PostNotFoundEroor extends Error {
  constructor(id) {
    super(`Post ${id} not found`);
    this.name = `post-not-found`;
  }
}

class UserNotDeletedErorr extends Error {
  constructor() {
    super(`The user you are trying to delete was not found`);
    this.name = `user-not-delete`;
  }
}

class PostNotDeletedErorr extends Error {
  constructor() {
    super(`The post you are trying to delete was not found`);
    this.name = `post-not-delete`;
  }
}

export {
  NotUserError,
  UserNotFoundError,
  PostNotFoundEroor,
  UserNotDeletedErorr,
  PostNotDeletedErorr,
};
