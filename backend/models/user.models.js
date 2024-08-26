import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: { // Changed from Number to String
        type: String, // Use String to handle phone number formatting
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'], // Fixed typo here
        required: true
    },
    // Uncomment and adjust profile field if needed
    
    // profile: {
    //     bio: { type: String },
    //     skills: [{ type: String }],
    //     resume: { type: String },
    //     resumeOriginalName: { type: String },
    //     company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    //     profilePhoto: {
    //         type: String,
    //         default: ""
    //     }
    // }
    
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
