import { Injectable } from "@nestjs/common";

import { Movement } from "./movements.model";

@Injectable()
export class MovementsService {
    private movement: Movement[] = [];

    insertMovement(desc: string, amount: number, movement_type_id: number,debt: number, date: string) {
        const movementId = 0;
        const newMovement = new Movement(null,desc,amount,movement_type_id,debt,date);
        this.movement.push(newMovement);
        console.log(this.movement);
        return movementId;
    }

    getMovements() {
        return [...this.movement];
    }
}