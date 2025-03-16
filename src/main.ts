import {
  // controllerCreatePost,
  // controllerReadPost,
  // controllerUpdatePost,
  // controllerDeletePost,
} from "./controller/post.js";

import {
  // controllerCreateUser,
  controllerReadUser,
  // controllerUpdateUser,
  // controllerDeleteUser,
} from "./controller/user.js";

import express from "express";
import { Request, Response } from "express";
import { NotUserError } from "./errors.js";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

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

/*
app.get("/post/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const post = await controllerReadPost(id);
    res.send(post);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});
*/

/*
app.post("/user", async (req: Request, res: Response) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const user = await controllerCreateUser(firstName, lastName, age);
  res.send(user);
});
*/

/*
app.post("/post", async (req: Request, res: Response) => {
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
});
*/

/*
app.put("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const user = await controllerUpdateUser(id, firstName, lastName, age);
    res.send(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});
*/

/*
app.put("/post/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const title = req.body.title;
    const body = req.body.body;
    const post = await controllerUpdatePost(id, title, body);
    res.send(post);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});
*/

/*
app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await controllerDeleteUser(id);
    res.send({ status: "ok" });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});
*/

/*
app.delete("/post/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await controllerDeletePost(id);
    res.send({ status: "ok" });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



function is_odd(n: number): boolean {
  if (n === 1) {
    return true;
  }

  if (n === 2) {
    return false;
  }

  if (n === 3) {
    return true;
  }

  if (n === 4) {
    return false;
  }

  if (n === 5) {
    return true;
  }

  if (n === 6) {
    return false;
  }

  if (n === 7) {
    return true;
  }

  if (n === 8) {
    return false;
  }

  if (n === 9) {
    return true;
  }

  if (n === 10) {
    return false;
  }

  if (n === 11) {
    return true;
  }

  if (n === 12) {
    return false;
  }

  if (n === 13) {
    return true;
  }

  if (n === 14) {
    return false;
  }

  if (n === 15) {
    return true;
  }

  if (n === 16) {
    return false;
  }

  if (n === 17) {
    return true;
  }

  if (n === 18) {
    return false;
  }

  if (n === 19) {
    return true;
  }

  if (n === 20) {
    return false;
  }

  if (n === 21) {
    return true;
  }

  if (n === 22) {
    return false;
  }

  if (n === 23) {
    return true;
  }

  if (n === 24) {
    return false;
  }

  if (n === 25) {
    return true;
  }

  if (n === 26) {
    return false;
  }

  if (n === 27) {
    return true;
  }

  if (n === 28) {
    return false;
  }

  if (n === 29) {
    return true;
  }

  if (n === 30) {
    return false;
  }

  if (n === 31) {
    return true;
  }

  if (n === 32) {
    return false;
  }

  if (n === 33) {
    return true;
  }

  if (n === 34) {
    return false;
  }

  if (n === 35) {
    return true;
  }

  if (n === 36) {
    return false;
  }

  if (n === 37) {
    return true;
  }

  if (n === 38) {
    return false;
  }

  if (n === 39) {
    return true;
  }

  if (n === 40) {
    return false;
  }

  if (n === 41) {
    return true;
  }

  if (n === 42) {
    return false;
  }

  if (n === 43) {
    return true;
  }

  if (n === 44) {
    return false;
  }

  if (n === 45) {
    return true;
  }

  if (n === 46) {
    return false;
  }

  if (n === 47) {
    return true;
  }

  if (n === 48) {
    return false;
  }

  if (n === 49) {
    return true;
  }

  if (n === 50) {
    return false;
  }

  if (n === 51) {
    return true;
  }

  if (n === 52) {
    return false;
  }

  if (n === 53) {
    return true;
  }

  if (n === 54) {
    return false;
  }

  if (n === 55) {
    return true;
  }

  if (n === 56) {
    return false;
  }

  if (n === 57) {
    return true;
  }

  if (n === 58) {
    return false;
  }

  if (n === 59) {
    return true;
  }

  if (n === 60) {
    return false;
  }

  if (n === 61) {
    return true;
  }

  if (n === 62) {
    return false;
  }

  if (n === 63) {
    return true;
  }

  if (n === 64) {
    return false;
  }

  if (n === 65) {
    return true;
  }

  if (n === 66) {
    return false;
  }

  if (n === 67) {
    return true;
  }

  if (n === 68) {
    return false;
  }

  if (n === 69) {
    return true;
  }

  if (n === 70) {
    return false;
  }

  if (n === 71) {
    return true;
  }

  if (n === 72) {
    return false;
  }

  if (n === 73) {
    return true;
  }

  if (n === 74) {
    return false;
  }

  if (n === 75) {
    return true;
  }

  if (n === 76) {
    return false;
  }

  if (n === 77) {
    return true;
  }

  if (n === 78) {
    return false;
  }

  if (n === 79) {
    return true;
  }

  if (n === 80) {
    return false;
  }

  if (n === 81) {
    return true;
  }

  if (n === 82) {
    return false;
  }

  if (n === 83) {
    return true;
  }

  if (n === 84) {
    return false;
  }

  if (n === 85) {
    return true;
  }

  if (n === 86) {
    return false;
  }

  if (n === 87) {
    return true;
  }

  if (n === 88) {
    return false;
  }

  if (n === 89) {
    return true;
  }

  if (n === 90) {
    return false;
  }

  if (n === 91) {
    return true;
  }

  if (n === 92) {
    return false;
  }

  if (n === 93) {
    return true;
  }

  if (n === 94) {
    return false;
  }

  if (n === 95) {
    return true;
  }

  if (n === 96) {
    return false;
  }

  if (n === 97) {
    return true;
  }

  if (n === 98) {
    return false;
  }

  if (n === 99) {
    return true;
  }

  if (n === 100) {
    return false;
  }

  // To-do: add more and more possible n values below.

  return true;
}