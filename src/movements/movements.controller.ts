import { Controller, Post, Get, Body } from "@nestjs/common";

import { MovementsService } from "./movements.service";

@Controller('movements')
export class MovementsController {
    constructor(private movementService: MovementsService) {

    }
    @Get()
    getMovement(){
        const response = this.movementService.getMovements();
        return {payload: response}
    }
    @Post()
    addMovement(
        @Body('description') movementDesc:string, 
        @Body('amount') movementAmount:number, 
        @Body('type') movementTypeId:number, 
        @Body('debt') movementDebt: number, 
        @Body('date') movementDate: string
        ): any {
        const response = this.movementService.insertMovement(movementDesc,movementAmount,movementTypeId,movementDebt,movementDate);
        return { id: response }
    }
}