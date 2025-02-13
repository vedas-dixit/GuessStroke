import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("❌ MONGODB_URL is not defined in .env file");
}

const cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then((mongoose) => {
        console.log("✅ MongoDB Connected");
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
