import mongoose, { Schema } from "mongoose";

export interface ILead {
    name: string;
    email: string;
    mobile: string;
    createdAt: Date;
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
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model<ILead>("Lead", leadSchema);

export default Lead;