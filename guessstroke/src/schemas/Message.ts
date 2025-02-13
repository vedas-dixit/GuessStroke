import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  sender: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
