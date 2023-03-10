import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm'
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [MovementsModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'event-manager',
    autoLoadEntities: true,
    synchronize: true,
  }),],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
