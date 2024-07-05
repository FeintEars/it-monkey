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
  // eslint-disable-next-line no-unused-vars
  controllerReadUser,
  // eslint-disable-next-line no-unused-vars
  controllerUpdateUser,
  // eslint-disable-next-line no-unused-vars
  controllerDeleteUser,
} from "./c ontroller/user.js";

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user", (req, res) => {
  console.log("Headrs:");
  console.log(req.headrs);

  console.log("Query parametrs:");
  console.log(req.query);

  console.log("Body");
  console.log(req.body);

  comsole.log("Params:");
  console.log(req.params);

  res.send("Create User!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
