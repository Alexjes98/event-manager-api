import { IsString, IsNotEmpty } from 'class-validator';
export class CreateMovementTypeDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    detail: string;
}
