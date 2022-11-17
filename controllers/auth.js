import User from "./User.js";
import { comparePasswords } from "../utils/crypt.js";

const user = new User();

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
