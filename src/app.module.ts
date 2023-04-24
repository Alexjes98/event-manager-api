import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { MovementTypeModule } from './movement_type/movement_type.module';
import { MovementModule } from './movement/movements.module';
import { PersonsModule } from './persons/persons.module';
import { DebtsModule } from './debts/debts.module';
import { ResumeModule } from './resume/resume.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'event-manager-test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    MovementTypeModule,
    MovementModule,
    PersonsModule,
    DebtsModule,
    ResumeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
