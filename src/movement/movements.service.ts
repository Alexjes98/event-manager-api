import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Movements } from './movements.entity';

@Injectable()
export class MovementService {
    private readonly logger = new Logger(MovementService.name);

    constructor(@InjectRepository(Movements) private movementRepository: Repository<Movements>) { }

    async findAll(): Promise<Movements[]> {
        try {
            return await this.movementRepository.find();
        } catch (e) {
            this.handleDBExceptions(e);
        }
    }


    private handleDBExceptions(error: any) {
        if (error.code === '23505') throw new BadRequestException(error.detail);
        this.logger.error(error);
        throw new InternalServerErrorException(
            'Unexpected Error. Check Server Logs',
        );
    }

}
