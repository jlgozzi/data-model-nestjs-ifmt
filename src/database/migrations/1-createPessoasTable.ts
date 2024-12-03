import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePessoasTable1670000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pessoas',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'CPF',
            type: 'varchar',
            length: '14',
            isUnique: true,
          },
          {
            name: 'dataNascimento',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'mae',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pessoas');
  }
}
