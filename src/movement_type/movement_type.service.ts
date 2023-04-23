import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MovementType } from './movement_type.entity';
import { CreateMovementTypeDto } from './dto/movement_type.dto';


@Injectable()
export class MovementTypeService {
    constructor(@InjectRepository(MovementType) private movementTypeRepository: Repository<MovementType>) {}

    async create(movementType: CreateMovementTypeDto): Promise<MovementType> {
        const newMovementType  = this.movementTypeRepository.create(movementType);
        return await this.movementTypeRepository.save(newMovementType);
    }

    async findAll(): Promise<MovementType[]> {
        return await this.movementTypeRepository.find();
    }

    async findOne(id: number): Promise<MovementType> {
        return//return await this.movementType.findBy(id);
    }

    
}
