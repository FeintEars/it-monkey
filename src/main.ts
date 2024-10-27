import { Request, Response } from "express";
import {} from //controllerCreatePost,
//controllerReadPost,
//controllerUpdatePost,
//controllerDeletePost,
"./controller/post.js";

import {
  controllerCreateUser,
  controllerReadUser,
  //controllerUpdateUser,
  //controllerDeleteUser,
} from "./controller/user.js";

import express from "express";
import { NotUserError } from "./errors.js";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await controllerReadUser(id);
    res.send(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});

/* app.get("/post/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const post = await controllerReadPost(id);
    res.send(post);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});*/

app.post("/user", async (req: Request, res: Response) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const user = await controllerCreateUser(firstName, lastName, age);
    res.send(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});

/* app.post("/post", async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const body = req.body.body;
    const authorId = req.body.authorId;
    const author = await controllerReadUser(authorId);
    const post = await controllerCreatePost(title, body, author);
    res.send(post);
  } catch (error: any) {
    if (error instanceof NotUserError) {
      res.status(400).send({ error: "User is not found by authorId" });
    } else {
      res.status(400).send({ error: error.message });
    }
  }
});*/

/*
app.put("/user/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const user = await controllerUpdateUser(id, firstName, lastName, age);
  res.send(user);
});
*/

/*app.put("/post/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const title = req.body.title;
  const body = req.body.body;
  const post = await controllerUpdatePost(id, title, body);
  res.send(post);
});*/

/*app.delete("/user/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await controllerDeleteUser(id);
  res.send({ status: "ok" });
});*/

/*app.delete("/post/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await controllerDeletePost(id);
  res.send({ status: "ok" });
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
