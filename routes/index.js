import express from "express";
import { isAuthorized } from "../controllers/auth.js";
import routerLogin from "./api/login.js";
import routerRegister from "./api/register.js";
import cookieParser from "cookie-parser";
import session from "express-session";

/**
 * Settings
 */

const router = express.Router();

/**
 * Middlewares
 */

// Session and cookies
router.use(cookieParser(process.env.COOKIE_SECRET));
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Routes
router.use("/login", routerLogin);
router.use("/register", routerRegister);

/**
 * Protected route
 */

router.get("/", isAuthorized, (req,res) => {
    res.json({
        message: "Login & Register Server"
    });
});

/**
 * Errors handler middleware
 */

router.use((err, req, res, next) => {
    console.log(err);
    next();
});

export default router;