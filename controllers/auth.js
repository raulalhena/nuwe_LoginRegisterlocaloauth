import User from "./User.js";
import { comparePasswords } from "../utils/crypt.js";

/**
 * Instantiating model User
 */

const user = new User();

/**
 * Middleware to check user data: name & password
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const authorizingLogin = async (req, res, next) => {
    
    let existingUser;
    const { name, password } = req.body;

    try{
        existingUser = await user.getUser(name, password);
    }catch(err){
        console.error(err);
    }
    
    if(existingUser && await comparePasswords(password, existingUser.password)) {
        req.session.logged = true;
        req.session.username = existingUser.name;
        next();
    }else{
        res.redirect("/login");
    }

}


/**
 * Middleware to check if user is logged
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const isAuthorized = (req, res, next) => {
    if (req.session.logged === true){
        next();
    }else{
        res.redirect("/login");
    }
}

export {
    authorizingLogin,
    isAuthorized
}
