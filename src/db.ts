import { DataSource } from "typeorm";
import { Post } from "./entities/post";
import { User } from "./entities/user";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "itmonkey",
  synchronize: true,
  logging: true,
  entities: [User, Post],
});
