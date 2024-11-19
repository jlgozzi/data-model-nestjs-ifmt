import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosModule } from './core/alunos/alunos.module';
import { ProfessoresModule } from './core/professores/professores.module';
import { ClientesModule } from './core/clientes/clientes.module';
import { PessoasModule } from './core/pessoas/pessoas.module';

@Module({
  imports: [AlunosModule, ProfessoresModule, ClientesModule, PessoasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
