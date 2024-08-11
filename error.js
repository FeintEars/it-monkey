class NotUserError extends Error {
  constructor() {
    super("Author is not an User instance");
    this.name = "not-user-error";
  }
}
export { NotUserError };
