import express from "express";
import dotenv from "dotenv";
import { authorizingLogin } from "./auth.js";

const routerLogin = express.Router();
dotenv.config();

/**
 *  Middlewares
 */

routerLogin.get("/", async (req, res) => {
    res.json({
        message: "Formulario login"
    });
});

routerLogin.post("/", authorizingLogin, async (req, res) => {
    res.redirect("/");
});

export default routerLogin;