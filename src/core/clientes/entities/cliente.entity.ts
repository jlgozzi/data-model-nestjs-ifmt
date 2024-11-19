import { Pessoa } from 'src/core/pessoas/entities/pessoa.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pessoa, (pessoa) => pessoa.clientes)
  pessoa: Pessoa;

  @Column({ type: 'date' })
  dataDeCadastro: Date;

  @Column({ length: 10 })
  status: string;
}
