import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  socketId: { type: String, required: true },
  roomId: { type: String, required: true },
  score: { type: Number, default: 0 },
  isHost: { type: Boolean, default: false },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
