import {
  controllerCreatePost,
  controllerReadPost,
  controllerUpdatePost,
  controllerDeletePost,
} from "./controller/post.js";

import {
  controllerCreateUser,
  controllerReadUser,
  controllerUpdateUser,
  controllerDeleteUser,
} from "./controller/user.js";

import express from "express";
import { NotUserError } from "./errors.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.get("/user/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await controllerReadUser(id);
    res.send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/post/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const post = await controllerReadPost(id);
    res.send(post);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

app.post("/user", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const user = await controllerCreateUser(firstName, lastName, age);
  res.send(user);
});

app.post("/post", async (req, res) => {
  try {
    const title = req.body.title;
    const body = req.body.body;
    const authorId = req.body.authorId;
    const author = await controllerReadUser(authorId);
    const post = await controllerCreatePost(title, body, author);
    res.send(post);
  } catch (error) {
    if (error instanceof NotUserError) {
      res.status(400).send({ error: "User is not found by authorId" });
    } else {
      res.status(400).send({ error: error.message });
    }
  }
});

app.put("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const user = await controllerUpdateUser(id, firstName, lastName, age);
  res.send(user);
});

app.put("/post/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const title = req.body.title;
  const body = req.body.body;
  const post = await controllerReadPost(id);
  const author = post.author;
  const post2 = await controllerUpdatePost(id, title, body, author);
  res.send(post2);
});

app.delete("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await controllerDeleteUser(id);
  res.send({ status: "ok" });
});

app.delete("/post/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  await controllerDeletePost(id);
  res.send({ status: "ok" });
});

app.post("/user", (req, res) => {
  console.log("Headrs:");
  console.log(req.headrs);

  console.log("Query parametrs:");
  console.log(req.query);

  console.log("Body");
  console.log(req.body);

  console.log("Params:");
  console.log(req.params);

  res.send("Create User!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
