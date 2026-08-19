import type { Request, Response } from "express";
import Lead from "../models/lead.model.js";
import { sendLeadToZoho } from "../services/zoho.services.js";
import LeadDuplicateCache from "../models/leadDuplicateCache.model.js";

export const createLead = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, email, mobile, website } = req.body;
        
        if (website) {
            res.status(400).json({
                success: false,
                message: "Invalid submission",
            });
            return;
        }

        if (!name || !email || !mobile) {
            res.status(400).json({
                success: false,
                message: "Name, email and mobile are required",
            });
            return;
        }

        if (typeof name !== "string" || name.trim().length < 2) {
            res.status(400).json({
                success: false,
                message: "Please enter a valid name",
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            typeof email !== "string" ||
            !emailRegex.test(email.trim())
        ) {
            res.status(400).json({
                success: false,
                message: "Please enter a valid email address",
            });
            return;
        }

        const mobileRegex = /^[6-9]\d{9}$/;

        if (
            typeof mobile !== "string" ||
            !mobileRegex.test(mobile.trim())
        ) {
            res.status(400).json({
                success: false,
                message: "Please enter a valid 10-digit mobile number",
            });
            return;
        }

        const formattedName = name.trim();
        const formattedEmail = email.trim().toLowerCase();
        const formattedMobile = mobile.trim();

        try {
            await LeadDuplicateCache.create({
                email: formattedEmail,
                mobile: formattedMobile,
            });
        } catch (error: unknown) {
            if (
                typeof error === "object" &&
                error !== null &&
                "code" in error &&
                error.code === 11000
            ) {
                res.status(429).json({
                    success: false,
                    message:
                        "You have already submitted an enquiry recently. Please try again later.",
                });
                return;
            }

            throw error;
        }

        // Try sending to Zoho first
        try {
            await sendLeadToZoho({
                name: formattedName,
                email: formattedEmail,
                mobile: formattedMobile,
            });

            res.status(201).json({
                success: true,
                message: "Lead sent successfully",
            });
            return;

        } catch (error) {
            console.error(
                "Zoho failed, saving lead to MongoDB:",
                error
            );
        }

        // Zoho failed → save in MongoDB
        const lead = await Lead.create({
            name: formattedName,
            email: formattedEmail,
            mobile: formattedMobile,
            synced: false,
        });

        res.status(201).json({
            success: true,
            message: "Lead saved successfully",
            data: lead,
        });

    } catch (error) {
        console.error("Error creating lead:", error);

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};