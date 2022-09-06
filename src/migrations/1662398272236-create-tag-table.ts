import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { primaryKey, timeStamp } from '../database/generate';

export class createTagTable1662398272236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tags',

        columns: [
          primaryKey(),
          {
            name: 'text',
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
    await queryRunner.dropTable('tags', true);
  }
}
