import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) throw new Error("MONGO_URI is not yet set!");
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MONGODB CONNECTED SUCESSFULLY: ${conn.connection.host}`);
  } catch (error) {
    console.log("ERROR CONNECTION TO MONGDB:" + error);
    process.exit(1); // 1 means fail, 0 means success
  }
};
