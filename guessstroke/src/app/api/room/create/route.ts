import { connectDB } from "@/lib/mongo";
import Room from "@/schemas/Room";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import User from "@/schemas/User";

function generateRoomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString(); 
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const socketId = "1235"
    const { userName} = await req.json();

    if (!userName) {
      return NextResponse.json({ error: "User name is required" }, { status: 400 });
    }

    if (!socketId) {
      return NextResponse.json({ error: "SocketId is required" }, { status: 400 });
    }

    const roomId = uuidv4();
    const roomCode = generateRoomCode();

    const hostUser = await User.create({
      name: userName,
      socketId: socketId,
      roomId: roomId,
      isHost: true,
    });

    const newRoom = await Room.create({
      roomId,
      roomCode,
      hostId: hostUser._id,
      players: [hostUser._id], 
      currentWord: "",
      round: 1,
      isActive: true,
    });

    return NextResponse.json({ success: true, roomId: newRoom.roomId, roomCode: newRoom.roomCode }, { status: 201 });
  } catch (error) {
    console.error("Error creating room:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
