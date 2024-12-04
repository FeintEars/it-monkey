class NotUserError extends Error {
  constructor() {
    super("Author is not an User instance");
    this.name = "not-user-error";
  }
}

class UserNotFoundError extends Error {
  constructor(id: number) {
    super(`User ${id} not found`);
    this.name = `user-not-found`;
  }
}

class PostNotFoundError extends Error {
  constructor(id: number) {
    super(`Post ${id} not found`);
    this.name = `post-not-found`;
  }
}

class AuthorNotFoundError extends Error {
  constructor() {
    super(`Author not found`);
    this.name = `author-not-found`;
  }
}

class UserNotDeletedError extends Error {
  constructor() {
    super(`The user you are trying to delete was not found`);
    this.name = `user-not-delete`;
  }
}

class PostNotDeletedError extends Error {
  constructor() {
    super(`The post you are trying to delete was not found`);
    this.name = `post-not-delete`;
  }
}

export {
  NotUserError,
  UserNotFoundError,
  PostNotFoundError,
  UserNotDeletedError,
  PostNotDeletedError,
  AuthorNotFoundError,
};
