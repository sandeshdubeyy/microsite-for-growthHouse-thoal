import type { Request, Response } from "express";
import Lead from "../models/lead.model.js";

export const createLead = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { name, email, mobile } = req.body;

        // Check required fields
        if (!name || !email || !mobile) {
            res.status(400).json({
                success: false,
                message: "Name, email and mobile are required",
            });
            return;
        }

        // Validate name
        if (typeof name !== "string" || name.trim().length < 2) {
            res.status(400).json({
                success: false,
                message: "Please enter a valid name",
            });
            return;
        }

        // Validate email
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

        // Validate Indian mobile number
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

        // Format data before saving/checking
        const formattedName = name.trim();
        const formattedEmail = email.trim().toLowerCase();
        const formattedMobile = mobile.trim();

        // Calculate the time 12 hours ago
        const twelveHoursAgo = new Date(
            Date.now() - 12 * 60 * 60 * 1000
        );

        // Block only if BOTH email and mobile match
        // within the last 12 hours
        const existingLead = await Lead.findOne({
            email: formattedEmail,
            mobile: formattedMobile,
            createdAt: {
                $gte: twelveHoursAgo,
            },
        });

        if (existingLead) {
            res.status(429).json({
                success: false,
                message:
                    "You have already submitted an enquiry recently. Please try again later.",
            });
            return;
        }

        // Create new lead
        const lead = await Lead.create({
            name: formattedName,
            email: formattedEmail,
            mobile: formattedMobile,
        });

        res.status(201).json({
            success: true,
            message: "Lead created successfully",
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