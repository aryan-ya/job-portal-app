import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL); // Updated to MONGO_URL
        console.log("mongo connected successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDB;