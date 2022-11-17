import express from "express";
import User from "../../controllers/User.js";
import sendResponse from "../../utils/responseHandler.js";
import { hashedPassword } from "../../utils/crypt.js";
import router from "../index.js";

const routerRegister = express.Router();
const user = new User();

routerRegister.get("/", (req, res) => {
   res.json({
        message: "Formulario login"
    });
})

routerRegister.post("/", async (req, res) => {

    let newUser;
    req.body.password = await hashedPassword(req.body.password);

    try{
        newUser = await user.createUser(req.body);
    }catch(err){
        console.error(err);
    }
    
    if(newUser) {
        sendResponse(
            res, 
            200,
            "User created successfully",
            newUser
        );
    }else{
        sendResponse(
            res, 
            400,
            "Error creating new user"
        );
    }
    
});

export default routerRegister;