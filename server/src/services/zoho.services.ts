import type { ILead } from "../models/lead.model.js";

type ZohoLeadData = Pick<ILead, "name" | "email" | "mobile">;

export const sendLeadToZoho = async (
    lead: ZohoLeadData
): Promise<boolean> => {

    throw new Error("Zoho integration not configured yet");
};