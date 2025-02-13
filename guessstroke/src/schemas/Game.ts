import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  roomId: { type: String, required: true },
  drawerId: { type: String, required: true },
  strokes: { type: Array, default: [] },
  word: { type: String, required: true },
  timer: { type: Number, default: 60 },
});

export default mongoose.models.Game || mongoose.model("Game", GameSchema);
