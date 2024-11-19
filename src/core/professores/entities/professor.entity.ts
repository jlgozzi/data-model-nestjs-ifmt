import { Pessoa } from 'src/core/pessoas/entities/pessoa.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('professores')
export class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.professores)
  pessoa: Pessoa;

  @Column({ length: 45 })
  areaDeAtuacao: string;

  @Column()
  numeroDeRegistro: number;
}
