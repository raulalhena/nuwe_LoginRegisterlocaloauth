import express from "express";
import createUser from "../../controllers/userManager.js";

const routerRegister = express.Router();

routerRegister.get("/", (req, res) => {
   res.json({
        message: "Formulario login"
    });
})

routerRegister.post("/", createUser, async (req, res) => {
    res.redirect("/");
});

export default routerRegister;