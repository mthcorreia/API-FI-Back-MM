import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()

export class UserMatheus {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    peca: string

    @Column()
    classificatoria: number
}
