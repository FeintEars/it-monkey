import "reflect-metadata";
import { Request, Response } from "express";
import express from "express";
import { NotUserError } from "./errors.js";
import { AppDataSource } from "./db";

async function createServer() {
  await AppDataSource.initialize();

  const app = express();
  const port = 3000;

  app.use(express.json());
  /*
app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const user = await controllerReadUser(id);
    res.send(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});

app.get("/post/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const post = await controllerReadPost(id);
    //post.author = await controllerReadUser(post.authorId);
    res.send(post);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});

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

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await controllerDeleteUser(id);
    res.send({ status: "ok" });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
});

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
}
createServer();
