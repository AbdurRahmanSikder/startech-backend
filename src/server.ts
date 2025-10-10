import app from "./app";
import { port } from "./config";
import connectCloudinary from "./config/cloudinary.config";
import connectDB from "./config/database.config";
import { getErrorMessage } from "./shared/utils/error.utils";

void (async () => {
    try {
        await connectDB();
        await connectCloudinary();

        app.listen(port, () => {
            console.info(`🚀 Server running on port ${port}`);
        });
    } catch (error) {
        console.error(getErrorMessage(error));
    }
})();
