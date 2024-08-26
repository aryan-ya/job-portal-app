import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // Remove deprecated options
        });
        console.log("MongoDB connected");
        console.log("MongoDB URL:", process.env.MONGO_URL);

    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

export default connectDB;
