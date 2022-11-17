import User from "./User.js";
import { hashedPassword } from "../utils/crypt.js";

const user = new User();

const createUser = async (req, res, next) => {

    let newUser;
    req.body.password = await hashedPassword(req.body.password);

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