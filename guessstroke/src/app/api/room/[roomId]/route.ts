import { connectDB } from "@/lib/mongo";
import Room from "@/schemas/Room";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { roomId: string } }) {
  await connectDB();
  const room = await Room.findOne({ roomId: params.roomId });

  if (!room) return NextResponse.json({ success: false, message: "Room not found" });

  return NextResponse.json({ success: true, room });
}
