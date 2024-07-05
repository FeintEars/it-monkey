import {
  controllerCreatePost,
  // eslint-disable-next-line no-unused-vars
  controllerReadPost,
  // eslint-disable-next-line no-unused-vars
  controllerUpdatePost,
  // eslint-disable-next-line no-unused-vars
  controllerDeletePost,
} from "./controller/post.js";

// Frontend developer.
const post1 = controllerCreatePost("Title 4", "Body 4", "Obby van Buren");
console.log(post1);

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
