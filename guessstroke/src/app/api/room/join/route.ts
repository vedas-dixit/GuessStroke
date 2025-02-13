import { connectDB } from "@/lib/mongo";
import Room from "@/schemas/Room";
import User from "@/schemas/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { roomCode, userName } = await req.json();
    const socketId = "1235" //temp
    if (!roomCode || !userName) {
      return NextResponse.json({ error: "Room code and user name are required" }, { status: 400 });
    }

    const room = await Room.findOne({ roomCode: roomCode });
    if (!room) {
      return NextResponse.json({ error: "Room not found" }, { status: 404 });
    }

    const newUser = await User.create({
      name: userName,
      roomId: roomCode,
      isHost: false,
      socketId: socketId
    });

    room.players.push(newUser._id);
    await room.save();

    return NextResponse.json({ success: true, roomId: roomCode, userId: newUser._id }, { status: 200 });
  } catch (error) {
    console.error("Error joining room:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
