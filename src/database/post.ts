import { User } from "./user.js";

class Post {
  id: number;
  title: string;
  body: string;
  authorId: number;
  author?: User | null;
  constructor(id: number, title: string, body: string, authorId: number) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.authorId = authorId;
  }
}

export { Post };
