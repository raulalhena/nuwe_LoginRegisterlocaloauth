import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class User {
    
    /**
     * GET one user
     * @param {*} _id 
     */
    async getUser(_name, _password) {

        let user;

        try{
            user = await prisma.user.findUnique({
                where: {
                    name: _name
                },
                select: {
                    name: true,
                    password: true
                }
            }) || null;
        }catch(err){
            console.error(err);
        }

        return user;
    }

    /**
     * Create new user
     * @param {*} _name 
     * @param {*} _password 
     * @returns 
     */
    async createUser(userData){

        let user;

        try{
            user = await prisma.user.create({
                data: {
                    ...userData
                }
            }) || null;
        }catch(err){
            console.error(err);
        }

        return user;
    }

}