import { Pessoa } from 'src/core/pessoas/entities/pessoa.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('alunos')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.alunos)
  pessoa: Pessoa;

  @Column()
  matricula: number;

  @Column()
  anoIngresso: number;
}
