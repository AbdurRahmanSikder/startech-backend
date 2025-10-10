import { v2 as cloudinary } from "cloudinary";
import { getErrorMessage } from "../shared/utils/error.utils";

const connectCloudinary = async (): Promise<void> => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINAEY_API_SECRETE,
    });
};

void (async () => {
    try {
        await connectCloudinary();
        console.info("🌧️  Successfully connect cloudinary");
    } catch (error) {
        console.error("😭 Failed to connect cloudinary", getErrorMessage(error));
    }
})();

export default connectCloudinary;
