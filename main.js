import {
   
  controllerCreatePost,
   
  controllerReadPost,
  // eslint-disable-next-line no-unused-vars
  controllerUpdatePost,
  // eslint-disable-next-line no-unused-vars
  controllerDeletePost,
} from "./controller/post.js";
import {
  controllerCreateUser,
  controllerReadUser,
  // eslint-disable-next-line no-unused-vars
  controllerUpdateUser,
  // eslint-disable-next-line no-unused-vars
  controllerDeleteUser,
} from "./controller/user.js";

// Frontend developer.
const user1 = await controllerCreateUser("ROnald", "Potter", 11);
console.log(user1);
const post2 = await controllerCreatePost("название", "text", user1);
console.log(post2);

import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await controllerReadUser(id);
  res.send(user);
});

app.get("/post/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const post = await controllerReadPost(id);
  res.send(post);
});

app.post("/user", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const user = await controllerCreateUser(firstName, lastName, age);
  res.send(user);
});

app.post("/post", async (req, res) => {
  const title = req.body.title;
  const body = req.body.body;
  const authorId = req.body.authorId;
  const author = await controllerReadUser(authorId);
  const post = await controllerCreatePost(title, body, author);
  res.send(post);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
