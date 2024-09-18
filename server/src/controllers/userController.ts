import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const users = await prisma.user.findMany();
        res.json(users)
    }
    catch (err: any) {
        res.status(500).json({ message: `Error getting Users: ${err.message}` })
    }
}


export const createUser = async (
    req: Request,
    res: Response
) => {
    try{
        const {
            username,
            cognitoId,
            profilePictureUrl = "i1.jpg",
            teamId = 1
        } = req.body

        const newUser = await prisma.user.create({
            data:{
                username,
                cognitoId,
                profilePictureUrl,
                teamId
            },
        });
        res.json({message: "User Created", newUser})
    }
    catch(error: any){
        res.status(500).json({message: "Error creating user:", error});
    }
}