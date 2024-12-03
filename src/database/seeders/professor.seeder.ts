import { Pessoa } from 'src/core/pessoas/entities/pessoa.entity';
import { Professor } from 'src/core/professores/entities/professor.entity';
import { DataSource } from 'typeorm';

export class ProfessorSeeder {
  public static async run(dataSource: DataSource): Promise<void> {
    const pessoaRepository = dataSource.getRepository(Pessoa);
    const professorRepository = dataSource.getRepository(Professor);

    const pessoa = pessoaRepository.create({
      nome: 'João Silva',
      CPF: '12345678900',
      dataNascimento: new Date('1980-05-15'),
      mae: 'Maria Silva',
    });
    await pessoaRepository.save(pessoa);

    const professor = professorRepository.create({
      pessoa,
      areaDeAtuacao: 'Matemática',
      numeroDeRegistro: 456789,
    });
    await professorRepository.save(professor);

    console.log('Professor seed criado com sucesso!');
  }
}
