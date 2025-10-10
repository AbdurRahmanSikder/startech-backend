import express, { type Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./database.config";
import connectCloudinary from "./cloudinary.config";
import { getErrorMessage } from "../shared/utils/error.utils";
dotenv.config();
export const port: number = parseInt(process.env.PORT ?? "8000", 10);
export const configureApp = (app: Application): void => {
    app.use(express.json());
    app.use(helmet());
    app.use(morgan("tiny"));
    app.get("/", (_req, res) => res.send("Api is working"));
    void (async () => {
        try {
            await connectDB();
            await connectCloudinary();
            console.info("☁️ Cloudinary connected successfully");
            app.listen(port, () => {
                console.info(`🌐 Visit: http://localhost:${port}`);
            });
        } catch (error) {
            console.error("😭 Failed to app config ", getErrorMessage(error));
        }
    });
};
