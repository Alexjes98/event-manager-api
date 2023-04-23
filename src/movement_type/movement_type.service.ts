import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MovementType } from './movement_type.entity';
import { CreateMovementTypeDto } from './dto/movement_type.dto';


@Injectable()
export class MovementTypeService {
    private readonly logger = new Logger(MovementTypeService.name);

    constructor(@InjectRepository(MovementType) private movementTypeRepository: Repository<MovementType>) { }

    async create(movementType: CreateMovementTypeDto): Promise<MovementType> {
        try {
            const newMovementType = this.movementTypeRepository.create(movementType);
            return await this.movementTypeRepository.save(newMovementType);
        } catch (e) {
            this.handleDBExceptions(e);
        }
    }

    async findAll(): Promise<MovementType[]> {
        return await this.movementTypeRepository.find();
    }

    async findOne(id: number): Promise<MovementType> {
        return//return await this.movementType.findBy(id);
    }

    private handleDBExceptions(error: any) {
        if (error.code === '23505') throw new BadRequestException(error.detail);

        this.logger.error(error);
        throw new InternalServerErrorException(
            'Unexpected Error. Check Server Logs',
        );
    }


}
