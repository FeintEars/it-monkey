import express, { Request, Response } from "express";
import pool from "./db";

const app = express();

// Додаємо middleware для обробки JSON
app.use(express.json());

// Типізація для користувача
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number | null; // Тип може бути або число, або null
}

// Типізація для посту
interface Post {
  id: number;
  title: string;
  body: string;
  authorId: number;
}

// Маршрут для отримання всіх користувачів
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query<User>('SELECT * FROM "Users"');
    res.json(result.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Маршрут для створення нового користувача
app.post("/users", async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age } = req.body;
    const newUser = await pool.query<User>(
      'INSERT INTO "Users" ("firstName", "lastName", "age") VALUES ($1, $2, $3) RETURNING *',
      [firstName, lastName, age],
    );
    res.json(newUser.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// Маршрут для отримання всіх постів
app.get("/posts", async (req: Request, res: Response) => {
  try {
    const result = await pool.query<Post>('SELECT * FROM "Posts"');
    res.json(result.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Маршрут для створення нового посту
app.post("/posts", async (req: Request, res: Response) => {
  try {
    const { title, body, authorId } = req.body;
    const newPost = await pool.query<Post>(
      'INSERT INTO "Posts" ("title", "body", "authorId") VALUES ($1, $2, $3) RETURNING *',
      [title, body, authorId],
    );
    res.json(newPost.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Запускаємо сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
