import internal = require("stream")
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    peca: string

    @Column()
    classificatoria: number


}
