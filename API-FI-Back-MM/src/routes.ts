import { UserController } from "./controller/UserController"
import { UserMat } from "./controller/UserMat"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController, UserMat,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController, UserMat,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController, UserMat,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController, UserMat,
    action: "remove"
}]