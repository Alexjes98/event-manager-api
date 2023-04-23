import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

import { MovementService } from './movements.service';

@Controller('movement')
export class MovementController {
    constructor(private movementService: MovementService) { }
    @Get()
    async getAll(@Res() res: any) {
        const movements = await this.movementService.findAll();
        return res.status(HttpStatus.OK).json(movements);
    }

}
