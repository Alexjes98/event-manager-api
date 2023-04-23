import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'movement_types'})
export class MovementType {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    detail: string;   
}