import mongoose from "mongoose";
import { getErrorMessage } from "../shared/utils/error.utils";

const connectDB = async (): Promise<void> => {
    try {
        mongoose.connection.on("connected", () => console.info("😍 Database Connected"));

        await mongoose.connect(`${process.env.MONGODB_URI}/Startech-backend`);
    } catch (error: unknown) {
        console.error(getErrorMessage(error));
    }
};

export default connectDB;
