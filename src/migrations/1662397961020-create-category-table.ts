import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';
import { primaryKey, timeStamp } from '../database/generate';

export class createCategoryTable1662397961020 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',

        columns: [
          primaryKey(),
          {
            name: 'category',
            type: 'varchar',
            isNullable: false,
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories', true);
  }
}
