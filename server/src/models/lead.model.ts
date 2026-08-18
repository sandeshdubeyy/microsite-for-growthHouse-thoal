import mongoose, { Schema } from "mongoose";

export interface ILead {
    name: string;
    email: string;
    mobile: string;

    synced: boolean;
    retryCount: number;
    lastSyncAttempt?: Date;
    zohoSyncedAt?: Date;

    createdAt: Date;
    updatedAt: Date;
}

const leadSchema = new Schema<ILead>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

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

        // Has this lead successfully been sent to Zoho?
        synced: {
            type: Boolean,
            default: false,
        },

        // How many times have we tried to send it to Zoho?
        retryCount: {
            type: Number,
            default: 0,
        },

        // When was the last attempt made?
        lastSyncAttempt: {
            type: Date,
        },

        // When was it successfully synced with Zoho?
        zohoSyncedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model<ILead>("Lead", leadSchema);

export default Lead;