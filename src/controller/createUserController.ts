import { Request, Response } from "express"
import { main } from "../database/queries/createUser";


export class CreateUserController {

    handle(request:Request, response:Response){
        const user = request.body
        main(user)
        return response.status(201).json()
    }
}