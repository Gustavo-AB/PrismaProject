import { Request, Response } from "express"
import { getUsers } from "../database/queries/getUsers";


export class GetUsersController{

    async handle(request:Request, response:Response){
        const users = await getUsers()

        console.log(users)

        return response.status(200).json(users)
    }
}
