import express from "express";
import { configureApp } from "./config";

const app = express();
configureApp(app);

export default app;
