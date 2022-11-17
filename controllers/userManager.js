import User from "./User.js";
import { hashingPassword } from "../utils/crypt.js";

/**
 * Instantiating model User
 */

const user = new User();

/**
 * Adding user to DB through Prisma Model
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const createUser = async (req, res, next) => {

    let newUser;
    req.body.password = await hashingPassword(req.body.password);

    try{
        newUser = await user.createUser(req.body);
    }catch(err){
        console.error(err);
    }

    if(newUser) {
        req.session.logged = true;
        req.session.username = newUser.name;
        next();
     }else{
         res.status(400).redirect("/register");
     }
}

export default createUser;