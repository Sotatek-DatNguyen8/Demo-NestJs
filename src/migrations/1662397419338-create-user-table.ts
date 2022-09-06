import {
  MigrationInterface,
  PrimaryColumn,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';
import { primaryKey, timeStamp } from '../database/generate';

export class createUserTable1662397419338 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',

        columns: [
          primaryKey(),
          {
            name: 'username',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
            length: '100',
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users', true);
  }
}
