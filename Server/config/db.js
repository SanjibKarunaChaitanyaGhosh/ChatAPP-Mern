import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URL)

        console.log(`Mongodb connected${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}

export default connectDB