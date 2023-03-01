import { prisma } from "../prismaClient"


export async function getUsers(){
    const users = await prisma.user.findMany()
    return users
}
