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

class PostNotFoundEroor extends Error {
  constructor(id: number) {
    super(`Post ${id} not found`);
    this.name = `post-not-found`;
  }
}

export { NotUserError, UserNotFoundError, PostNotFoundEroor };
