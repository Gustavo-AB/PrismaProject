import { Request, Response } from "express"
import { getById } from "../database/queries/getById"


export class GetUserByIdController {
    async handle(request:Request, response:Response){
        const { id } = request.params
        const user = await getById(id)

        return response.status(200).json(user)
    }
}