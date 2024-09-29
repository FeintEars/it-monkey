import express from "express";
import pool from "./db";

const app = express();
app.use(express.json());

// Отримати всі пости
app.get("/posts", async (req, res) => {
  try {
    const posts = await pool.query(`
      SELECT p.id, p.title, p.body, u.firstname, u.lastname
      FROM "Posts" p
      JOIN "Users" u ON p."authorId" = u.id
    `);
    res.json(posts.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Створити новий пост
app.post("/posts", async (req, res) => {
  try {
    const { title, body, authorId } = req.body;
    const newPost = await pool.query(
      'INSERT INTO "Posts" ("title", "body", "authorId") VALUES ($1, $2, $3) RETURNING *',
      [title, body, authorId]
    );
    res.json(newPost.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Отримати всіх користувачів
app.get("/users", async (req, res) => {
  try {
    const users = await pool.query('SELECT * FROM "Users"');
    res.json(users.rows);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Створити нового користувача
app.post("/users", async (req, res) => {
  try {
    const { firstname, lastname, age } = req.body;
    const newUser = await pool.query(
      'INSERT INTO "Users" ("firstname", "lastname", "age") VALUES ($1, $2, $3) RETURNING *',
      [firstname, lastname, age]
    );
    res.json(newUser.rows[0]);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
