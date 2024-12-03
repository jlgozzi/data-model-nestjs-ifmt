import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateAlunosTable1670000000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'alunos',
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
            name: 'matricula',
            type: 'int',
          },
          {
            name: 'anoIngresso',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'alunos',
      new TableForeignKey({
        columnNames: ['pessoas_id'],
        referencedTableName: 'pessoas',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('alunos');
  }
}
