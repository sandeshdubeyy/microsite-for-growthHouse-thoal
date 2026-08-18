import Lead from "../models/lead.model.js";
import { sendLeadToZoho } from "./zoho.services.js";

export const syncUnsyncedLeads = async (): Promise<void> => {
    const unsyncedLeads = await Lead.find({
        synced: false,
    });

    for (const lead of unsyncedLeads) {
        try {
            lead.retryCount += 1;
            lead.lastSyncAttempt = new Date();

            await sendLeadToZoho({
                name: lead.name,
                email: lead.email,
                mobile: lead.mobile,
            });

            lead.synced = true;
            lead.zohoSyncedAt = new Date();

            await lead.save();

            console.log(`Lead ${lead._id} synced successfully`);

        } catch (error) {
            await lead.save();

            console.error(
                `Failed to sync lead ${lead._id}:`,
                error
            );
        }
    }
};