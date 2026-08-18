import cron from "node-cron";
import { syncUnsyncedLeads } from "../services/leadSync.service.js";

export const startZohoSyncJob = (): void => {
    cron.schedule("0 * * * *", async () => {
        console.log("Running Zoho lead sync job...");

        await syncUnsyncedLeads();
    });

    console.log("Zoho sync job started");
};