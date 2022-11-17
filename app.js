import express from "express";
import router from "./routes/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
dotenv.config();

app.disable("x-powered-by");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.SRV_PORT || 5000, () => {
    console.log("Server listening on port 5000..");
});