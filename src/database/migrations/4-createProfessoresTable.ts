import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateProfessoresTable1670000000003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'professores',
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
            name: 'areaDeAtuacao',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'numeroDeRegistro',
            type: 'int',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'professores',
      new TableForeignKey({
        columnNames: ['pessoas_id'],
        referencedTableName: 'pessoas',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('professores');
  }
}
