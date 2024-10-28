import mongoose from "mongoose";

export const Connect = async (url) => {
    try {
       await mongoose.connect(url)
       console.log("Successfully connected to MongoDB"); 
    } catch (error) {
        console.error(error);   
    }
}