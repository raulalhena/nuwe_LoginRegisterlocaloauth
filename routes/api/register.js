import express from "express";
import createUser from "../../controllers/userManager.js";

/**
 * Settings
 */

const routerRegister = express.Router();

/**
 * GET Register route: "rendering" Register Form
 */

routerRegister.get("/", (req, res) => {
   res.json({
        message: "Formulario registro"
    });
});

/**
 * POST Register route: create new User
 */

routerRegister.post("/", createUser, async (req, res) => {
    res.redirect("/login");
});

export default routerRegister;