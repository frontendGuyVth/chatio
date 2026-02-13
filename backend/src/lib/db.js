import mongoose from "mongoose"

export const connectDB = async () => {
    try {
     const conn = await mongoose.connect(process.env.MONGO_URI)
     console.log(`MONGODB CONNECTED SUCESSFULLY: ${conn.connection.host}`);
    } catch(error) {
      console.log("ERROR CONNECTION TO MONGDB:" + error);
      process.exit(1) // 1 means fail, 0 means success
    }
}