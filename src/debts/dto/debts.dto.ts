import { IsString, IsNotEmpty, IsNumber, IsDate} from 'class-validator';

export class CreateDebtDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsNumber()
    @IsNotEmpty()
    amount: number;
    @IsNumber()
    @IsNotEmpty()
    covered_amount: number;
    @IsNumber()
    @IsNotEmpty()
    responsible_id: number;
    @IsNumber()
    @IsNotEmpty()
    beneficiary_id: number;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsNumber()
    @IsNotEmpty()
    is_active: boolean;
    @IsDate()
    @IsNotEmpty()
    date: Date;
}