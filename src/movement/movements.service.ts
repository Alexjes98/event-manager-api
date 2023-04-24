import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, } from 'typeorm';

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

    async getMovementsBy(id: number, user_id: number, description: string, amount: number, type_id: number, debt: number, startDate: Date, endDate: Date): Promise<Movements[]> {
        try {
            const query = this.createSearchQuery({ id, user_id, description, amount, type_id, debt, startDate, endDate });
            return await this.movementRepository.find({
                where: query
            });
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

    private createSearchQuery(params) {
        let query = {};
        if (params.id) query['id'] = params.id;
        if (params.user_id) query['user_id'] = params.user_id;
        if (params.description) query['description'] = params.description;
        if (params.amount) query['amount'] = params.amount;
        if (params.type_id) query['movement_type_id'] = params.type_id;
        if (params.debt) query['debt'] = params.debt;
        if (params.startDate || params.endDate) query['date'] = Between(params.startDate ?? new Date(0), params.endDate ?? new Date('9999-12-31'));
        return query;
    }

}
