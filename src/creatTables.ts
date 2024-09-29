import pool from "./db";

const createTables = async () => {
  try {
    // Создаем таблицу Users
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Users (
        id SERIAL PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        age INTEGER NOT NULL
      );
    `);

    // Создаем таблицу Posts
    await pool.query(`
      CREATE TABLE IF NOT EXISTS Posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        authorId INTEGER,
        FOREIGN KEY (authorId) REFERENCES Users(id) ON DELETE SET NULL
      );
    `);

    console.log("Таблицы успешно созданы");
    pool.end();
  } catch (err) {
    console.error("Ошибка при создании таблиц:", err);
    pool.end();
  }
};

createTables();
