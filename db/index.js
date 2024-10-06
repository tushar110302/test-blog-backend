import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect(`${process.env.DB_URI}/blog-db`);
        console.log('Connected to DB');
    } catch (error) {
        console.log("Could not connect to DB", error);
        process.exit(1);
    }
}
