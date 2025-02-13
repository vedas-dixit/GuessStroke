import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  roomCode: { type: String, required: true, unique: true }, // 6-digit code
  hostId: { type: String, required: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  currentWord: { type: String, default: "" },
  round: { type: Number, default: 1 },
  isActive: { type: Boolean, default: true },
});

export default mongoose.models.Room || mongoose.model("Room", RoomSchema);
