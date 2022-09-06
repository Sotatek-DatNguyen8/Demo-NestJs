import { IsNotEmpty } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToMany,
} from 'typeorm';
import Comment from './comment';
// import User from './user';
import Tag from './Tag';
import Category from './Category';
import User from './user';

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @IsNotEmpty()
  public title: string;

  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
    onDelete: 'CASCADE',
  })
  public user: User;

  @OneToMany(() => Comment, (comment) => comment.post)
  public comments: Comment[];

  @ManyToMany(() => Tag, (tag) => tag.posts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  public tags: Tag[];

  @OneToOne(() => Category, (category) => category.post)
  public category: Category;

  @Column()
  public url: string;

  @Column()
  public text: string;

  @Column()
  @CreateDateColumn()
  public createdAt: Date;

  @Column()
  @UpdateDateColumn()
  public updatedAt: Date;
}

export default Post;
