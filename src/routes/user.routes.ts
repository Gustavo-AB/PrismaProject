import { Router } from "express"
import { CreateUserController } from "../controller/createUserController"
import { GetUsersController } from "../controller/getUsersController"
import { GetUserByIdController } from "../controller/getUserByIdController"


export const routes = Router()
const userController = new CreateUserController()
const getUserController = new GetUsersController()
const getUserByIdController = new GetUserByIdController()

routes.post("/user", userController.handle)
routes.get("/users", getUserController.handle)
routes.get("/user/:id", getUserByIdController.handle)