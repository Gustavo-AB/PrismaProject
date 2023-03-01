import { prisma } from "../prismaClient";



export async function getById(id:string){
    const user = await prisma.user.findUnique({
        where:{
            id: Number(id)
        }
    })

    return user
}