import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'movements'})
export class Movements {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: number;
    @Column()
    description: string;
    @Column()
    amount: number;
    @Column()
    movement_type_id: number;
    @Column()
    debt: number;
    @Column()
    date: Date;
}