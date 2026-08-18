import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";
import connectDB from "./configs/db.config.js";
import { startZohoSyncJob } from "./jobs/zohoSync.job.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    startZohoSyncJob();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();