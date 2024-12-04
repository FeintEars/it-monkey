import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({ nullable: true })
  authorId: number;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: "SET NULL",
    onUpdate: "SET NULL",
  })
  author: User | null;
}
