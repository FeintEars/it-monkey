import { Pool } from "pg";

// Налаштовуємо з'єднання до бази даних
const pool = new Pool({
  user: "admin", // Ім'я користувача PostgreSQL
  host: "localhost", // Хост бази даних
  database: "itmonkey", // Ім'я бази даних
  password: "admin", // Пароль користувача PostgreSQL
  port: 5432, // Порт PostgreSQL (за замовчуванням 5432)
});

// Експортуємо об'єкт pool для використання в інших файлах
export default pool;
