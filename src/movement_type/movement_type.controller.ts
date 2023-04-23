import { Controller, Get, Res, HttpStatus, Body, Post } from '@nestjs/common';

import { MovementTypeService } from './movement_type.service';
import { CreateMovementTypeDto } from './dto/movement_type.dto';

@Controller('movement-type')
export class MovementTypeController {
    constructor(private movementTypeService: MovementTypeService) {}

    
    @Get()
    async getAll(@Res() res: any){
        const movementTypes = await this.movementTypeService.findAll();
        return res.status(HttpStatus.OK).json(movementTypes);
    }

    @Get(':id')
    async getOne(@Res() res: any, id: number){
        const movementType = await this.movementTypeService.findOne(id);
        return res.status(HttpStatus.OK).json(movementType);
    }

    @Post()
    async create(@Res() res: any, @Body() movementType: CreateMovementTypeDto){
        const newMovementType = await this.movementTypeService.create(movementType);
        return res.status(HttpStatus.OK).json(newMovementType);
    }
    
}
