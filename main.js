import {
  // eslint-disable-next-line no-unused-vars
  controllerCreatePost,
  // eslint-disable-next-line no-unused-vars
  controllerReadPost,
  // eslint-disable-next-line no-unused-vars
  controllerUpdatePost,
  // eslint-disable-next-line no-unused-vars
  controllerDeletePost,
} from "./controller/post.js";

import {
  // eslint-disable-next-line no-unused-vars
  controllerCreateUser,
  controllerReadUser,
  // eslint-disable-next-line no-unused-vars
  controllerUpdateUser,
  // eslint-disable-next-line no-unused-vars
  controllerDeleteUser,
} from "./controller/user.js";

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await controllerReadUser(id);
  res.send(user);
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
