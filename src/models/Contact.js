import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, default: "N/A" },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
},
 { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
