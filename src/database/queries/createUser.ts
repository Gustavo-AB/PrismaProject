import { prisma } from "../prismaClient"


interface IRequest {
    name:string,
    age:string
}

export async function main(body:IRequest):Promise<void>{
    const { name, age } = body
    const user = await prisma.user.create({
        data: {
            name,
            age
        }
    })
}
