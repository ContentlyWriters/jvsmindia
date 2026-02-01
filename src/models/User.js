import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // optional
  provider: { type: String, default: "local" }, // 'local' ya 'google'
  resetPasswordToken: { type: String, default: null },
  resetPasswordExpire: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model("User", userSchema);
