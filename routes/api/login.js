import express from "express";
import dotenv from "dotenv";
import { authorizingLogin } from "../../controllers/auth.js";

const routerLogin = express.Router();
dotenv.config();

/**
 *  Middlewares
 */

routerLogin.get("/", (req, res) => {
    res.json({
        message: "Formulario login"
    });
});

routerLogin.post("/", authorizingLogin, (req, res) => {
    res.redirect("/");
});

export default routerLogin;