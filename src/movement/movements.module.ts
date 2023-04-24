import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Movements } from './entities/movements.entity';
import { MovementController } from './movements.controller';
import { MovementService } from './movements.service';
@Module({
    imports: [TypeOrmModule.forFeature([Movements])],
    controllers: [MovementController],
    providers: [MovementService],
})
export class MovementModule {
    
}
