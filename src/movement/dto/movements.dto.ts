import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';
export class CreateMovementDto {
    @IsNumber()
    @IsNotEmpty()
    user_id: number;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsNumber()
    @IsNotEmpty()
    amount: number;
    @IsNumber()
    @IsNotEmpty()
    movement_type_id: number;
    @IsNumber()
    @IsNotEmpty()
    debt_id: number;
    @IsDate()
    @IsNotEmpty()
    date: Date;
}