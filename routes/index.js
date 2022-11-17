import express from "express";
import { isAuthorized } from "./api/auth.js";
import routerLogin from "./api/login.js";
import routerRegister from "./api/register.js";
import cookieParser from "cookie-parser";
import session from "express-session";

const router = express.Router();

router.use(cookieParser(process.env.COOKIE_SECRET));
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));
router.use("/login", routerLogin);
router.use("/register", routerRegister);

/**
 * Root route to check connectivity
 */

router.get("/", isAuthorized, (req,res) => {
    res.json({
        message: "Login & Register Server"
    });
});

router.use((err, req, res, next) => {
    console.log(err);
    next();
});

export default router;