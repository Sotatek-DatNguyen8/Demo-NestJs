import { TableColumnOptions } from 'typeorm';

/**
 * Generate primary key column
 * @param options
 * @returns
 */
const primaryKey = (options?: object): TableColumnOptions => ({
  name: 'id',
  type: 'int',
  isPrimary: true,
  isGenerated: true,
  generationStrategy: 'increment',
  unsigned: true,
  ...options,
});

/**
 * Generate timestamp column
 */
const timeStamp = () => [
  {
    name: 'created_at',
    type: 'timestamp',
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'timestamp',
    default: 'now()',
  },
];

/**
 * Generate soft delete column
 */
const deletedAt = () => ({
  name: 'deleted_at',
  type: 'timestamp',
  default: 'now()',
});

export { primaryKey, timeStamp, deletedAt };
