import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';

import { MovementService } from './movements.service';

@Controller('movements')
export class MovementController {
    constructor(private movementService: MovementService) { }
    @Get()
    async getAll(@Res() res: any) {
        const movements = await this.movementService.findAll();
        return res.status(HttpStatus.OK).json(movements);
    }

    @Get('/search')
    async getMovementsBy(@Res() res: any, @Query('id') id: number, @Query('user_id') user_id: number, @Query('description') description: string, @Query('amount') amount: number, @Query('type_id') type_id: number, @Query('debt') debt: number, @Query('startDate') startDate: Date, @Query('endDate') endDate: Date) {
        const movements = await this.movementService.getMovementsBy(id, user_id, description, amount, type_id, debt, startDate, endDate);
        return res.status(HttpStatus.OK).json(movements);
    }

}
