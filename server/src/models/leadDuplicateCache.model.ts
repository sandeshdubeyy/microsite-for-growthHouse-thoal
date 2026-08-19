import mongoose, { Schema } from "mongoose";

export interface ILeadDuplicateCache {
    email: string;
    mobile: string;
    createdAt: Date;
}

const leadDuplicateCacheSchema =
    new Schema<ILeadDuplicateCache>(
        {
            email: {
                type: String,
                required: true,
                trim: true,
                lowercase: true,
            },

            mobile: {
                type: String,
                required: true,
                trim: true,
            },

            createdAt: {
                type: Date,
                default: Date.now,
                expires: 60 * 60 * 12,
            },
        },
        {
            versionKey: false,
        }
    );

// Prevent duplicate cache entries for the same email + mobile
leadDuplicateCacheSchema.index(
    {
        email: 1,
        mobile: 1,
    },
    {
        unique: true,
    }
);

const LeadDuplicateCache =
    mongoose.model<ILeadDuplicateCache>(
        "LeadDuplicateCache",
        leadDuplicateCacheSchema
    );

export default LeadDuplicateCache;