// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
dotenv.config();

console.log(process.env.MYSQL_DB_HOST);
export const databaseConfig = new DataSource({
  name: 'default',
  type: 'mysql',
  host: process.env.MYSQL_DB_HOST,
  port: parseInt(process.env.MYSQL_DB_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: ['src/entities/*.ts'],
  logging: true,
  logger: 'file',
  //   namingStrategy: new SnakeNamingStrategy(),
  migrationsTableName: 'migrate_tables',
  synchronize: false,
  migrations: ['src/migrations/**/*{.ts,.js}'],
  //   cli: {
  //     migrationsDir: 'src/migrations',
  //   },
});
