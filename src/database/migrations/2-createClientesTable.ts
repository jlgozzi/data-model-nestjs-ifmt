import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateClientesTable1670000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clientes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pessoas_id',
            type: 'int',
          },
          {
            name: 'dataDeCadastro',
            type: 'date',
          },
          {
            name: 'status',
            type: 'char',
            length: '10',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'clientes',
      new TableForeignKey({
        columnNames: ['pessoas_id'],
        referencedTableName: 'pessoas',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clientes');
  }
}
