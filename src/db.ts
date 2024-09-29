import { Pool } from "pg";

// Налаштування підключення до бази даних
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "admin",
  password: "admin",
  database: "itmonkey",
});

export default pool;