import express from "express";
import dotenv from "dotenv";
import { authorizingLogin } from "../../controllers/auth.js";

/**
 * Settings
 */

const routerLogin = express.Router();
dotenv.config();

/**
 *  Routes
 */

/**
 * GET Login route: "rendergin" Login Form
 */

routerLogin.get("/", (req, res) => {
    res.json({
        message: "Formulario login"
    });
});

/**
 * POST Login route: "rendergin" Login Form
 */

routerLogin.post("/", authorizingLogin, (req, res) => {
    res.redirect("/");
});

export default routerLogin;