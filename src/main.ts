import "reflect-metadata";
import { Request, Response } from "express";
import { AppDataSource } from "./db";
import { User } from "./entities/user";
import { Post } from "./entities/post";
import express from "express";
import {
  AuthorNotFoundError,
  UserNotFoundError,
  UserNotDeletedError,
  PostNotFoundError,
} from "./errors";

async function createServer() {
  await AppDataSource.initialize();
  const app = express();
  const port = 3000;

  app.use(express.json());

  app.get("/user/:id", async (req: Request, res: Response) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const id = parseInt(req.params.id);
      //const user = await userRepository.findOneBy({ id: id });
      const user = await userRepository.findOne({
        where: { id },
        relations: ["posts"],
      });
      if (user === null) {
        throw new UserNotFoundError(id);
      }
      res.send(user);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.get("/post/:id", async (req: Request, res: Response) => {
    try {
      const postRepository = AppDataSource.getRepository(Post);

      const id = parseInt(req.params.id);
      //const post = await postRepository.findOneBy({ id: id });
      const post = await postRepository.findOne({
        where: { id },
        relations: ["author"],
      });

      if (post === null) {
        throw new PostNotFoundError(id);
      }
      res.send(post);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.post("/user", async (req: Request, res: Response) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = new User();
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.age = req.body.age;
      await userRepository.save(user);
      res.send(user);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.post("/post", async (req: Request, res: Response) => {
    try {
      const post = new Post();
      post.title = req.body.title;
      post.body = req.body.body;
      post.authorId = req.body.authorId;

      if (post.authorId === null) {
        throw new AuthorNotFoundError();
      }
      await AppDataSource.transaction(async (manager) => {
        const postRepository = manager.getRepository(Post);
        const userRepository = manager.getRepository(User);

        post.author = await userRepository.findOneBy({ id: post.authorId });

        if (post.author === null) {
          throw new AuthorNotFoundError();
        }
        await postRepository.save(post);
      });

      res.send(post);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.put("/user/:id", async (req: Request, res: Response) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const user = new User();

      user.id = parseInt(req.params.id);
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.age = req.body.age;

      const result = await userRepository.update(user.id, user);
      if (result.affected === 0) {
        throw new UserNotFoundError(user.id);
      }
      res.send(user);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.put("/post/:id", async (req: Request, res: Response) => {
    try {
      const post = new Post();
      post.id = parseInt(req.params.id);
      post.title = req.body.title;
      post.body = req.body.body;

      let megaFullPost;
      await AppDataSource.transaction(async (manager) => {
        const postRepository = manager.getRepository(Post);

        const result = await postRepository.update(post.id, post);
        if (result.affected === 0) {
          throw new PostNotFoundError(post.id);
        }
        megaFullPost = await postRepository.findOne({
          where: { id: post.id },
          relations: ["author"],
        });
      });
      res.send(megaFullPost);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.delete("/post/:id", async (req: Request, res: Response) => {
    try {
      const postRepository = AppDataSource.getRepository(Post);
      const id = parseInt(req.params.id);
      const result = await postRepository.delete(id);

      if (result.affected === 0) {
        throw new PostNotFoundError(id);
      }
      res.send({ status: "ok" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const id = parseInt(req.params.id);
      const result = await userRepository.delete(id);

      if (result.affected === 0) {
        throw new UserNotDeletedError();
      }
      res.send({ status: "ok" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
createServer();
