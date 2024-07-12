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

import express from "express";
const app = express();
const port = 3000;

app.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await controllerReadUser(id);
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
