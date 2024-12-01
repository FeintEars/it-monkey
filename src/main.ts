import "reflect-metadata";

import { AppDataSource } from "./db";
import express from "express";
import { Request, Response } from "express";
import {
  UserNotFoundError,
  UserNotDeletedError,
  PostNotFoundError,
  PostNotDeletedError,
} from "./errors";
import { User } from "./entities/user";
import { Post } from "./entities/post";

async function createServer() {
  await AppDataSource.initialize();

  const app = express();
  const port = 3000;

  app.use(express.json());

  app.get("/user/:id", async (req: Request, res: Response) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const id = parseInt(req.params.id);
      //const user = await userRepository.findOneBy({ id });
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
      console.log(error);
      res.status(400).send({ error: error.message });
    }
  });

  app.post("/post", async (req: Request, res: Response) => {
    try {
      const postRepository = AppDataSource.getRepository(Post);
      const userRepository = AppDataSource.getRepository(User);

      const post = new Post();
      post.title = req.body.title;
      post.body = req.body.body;
      post.authorId = req.body.authorId;
      await postRepository.save(post);
      post.author = await userRepository.findOneBy({ id: post.authorId });
      res.send(post);
    } catch (error: any) {
      console.log(error);
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
      const postRepository = AppDataSource.getRepository(Post);
      const post = new Post();
      post.id = parseInt(req.params.id);
      post.title = req.body.title;
      post.body = req.body.body;

      const result = await postRepository.update(post.id, post);
      if (result.affected === 0) {
        throw new PostNotFoundError(post.id);
      }

      const fullpost = await postRepository.findOne({
        where: { id: post.id },
        relations: ["author"],
      });
      res.send(fullpost);
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const userRepository = AppDataSource.getRepository(User);
      const result = await userRepository.delete(id);
      if (result.affected === 0) {
        throw new UserNotDeletedError();
      }
      res.send({ status: "ok" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  });

  app.delete("/post/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const postRepository = AppDataSource.getRepository(Post);
      const result = await postRepository.delete(id);
      if (result.affected === 0) {
        throw new PostNotDeletedError();
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
