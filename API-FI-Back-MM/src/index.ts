import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors';
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import { UserMatheus } from "./entity/UserMatheus";

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    const cors=require('cors');

    app.use(bodyParser.json())
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)


    await AppDataSource.manager.save(
        AppDataSource.manager.create(UserMatheus, {
                id:1,
                peca:"rosca21",
                classificatoria: 3
        })
    )    
    
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
                id:1,
                peca:"rosca21",
                classificatoria: 3
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/UserMatheus to see results")

}).catch(error => console.log(error))
