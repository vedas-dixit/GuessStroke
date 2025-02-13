import { connectDB } from "@/lib/mongo";
import Room from "@/schemas/Room";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, { params }: { params: { roomId: string } }) {
  await connectDB();
  await Room.deleteOne({ roomId: params.roomId });
  return NextResponse.json({ success: true, message: "Room deleted" });
}
