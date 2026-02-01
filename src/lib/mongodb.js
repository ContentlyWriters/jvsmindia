import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI, {
      dbName: "jvsmindiaDb",
      bufferCommands: false,
    }).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
