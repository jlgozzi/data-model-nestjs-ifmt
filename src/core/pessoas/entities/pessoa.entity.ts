import { Aluno } from 'src/core/alunos/entities/aluno.entity';
import { Cliente } from 'src/core/clientes/entities/cliente.entity';
import { Professor } from 'src/core/professores/entities/professor.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('pessoas')
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 14, unique: true })
  CPF: string;

  @Column({ type: 'date', nullable: true })
  dataNascimento: Date;

  @Column({ length: 100, nullable: true })
  mae: string;

  @OneToMany(() => Cliente, (cliente) => cliente.pessoa)
  clientes: Cliente[];

  @OneToMany(() => Aluno, (aluno) => aluno.pessoa)
  alunos: Aluno[];

  @OneToMany(() => Professor, (professor) => professor.pessoa)
  professores: Professor[];
}
