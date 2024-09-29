import express, { Request, Response } from "express";
import pool from "./db";

const app = express();
app.use(express.json());

// Типы для пользователя и поста
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

interface Post {
  id: number;
  title: string;
  body: string;
  authorId: number;
}

// Роут для создания нового пользователя
app.post("/users", async (req: Request, res: Response) => {
  const { firstName, lastName, age }: User = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO "Users" ("firstName", "lastName", "age") VALUES ($1, $2, $3) RETURNING *',
      [firstName, lastName, age],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при создании пользователя" });
  }
});

// Роут для создания нового поста
app.post("/posts", async (req: Request, res: Response) => {
  const { title, body, authorId }: Post = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO "Posts" ("title", "body", "authorId") VALUES ($1, $2, $3) RETURNING *',
      [title, body, authorId],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при создании поста" });
  }
});

// Роут для получения всех пользователей
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM "Users"');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при получении пользователей" });
  }
});

// Роут для получения всех постов
app.get("/posts", async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM "Posts"');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка при получении постов" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
