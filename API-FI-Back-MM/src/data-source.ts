import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { UserMatheus } from "./entity/UserMatheus"

/*
export const AppDataSource = new DataSource({
    
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
*/

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [User, UserMatheus],
    synchronize: true,
    logging:false
    
})