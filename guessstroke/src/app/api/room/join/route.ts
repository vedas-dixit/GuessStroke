import { connectDB } from "@/lib/mongo";
import Room from "@/schemas/Room";
import User from "@/schemas/User";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { roomCode, userName } = await req.json();
    const socketId = "1235"; //temp, replace with actual socketId from client

    if (!roomCode || !userName) {
      return NextResponse.json({ error: "Room code and user name are required" }, { status: 400 });
    }

    // Check if the room exists
    const room = await Room.findOne({ roomCode: roomCode });
    if (!room) {
      return NextResponse.json({ error: "Room not found" }, { status: 404 });
    }

    // Check if the user already exists in the database
    let existingUser = await User.findOne({ name: userName });

    if (!existingUser) {
      // If the user does not exist, create a new user
      existingUser = await User.create({
        name: userName,
        roomId: room._id,  // Assign the user to the room
        isHost: false,     // This user is not the host
        socketId: socketId
      });
    }

    // Add the user to the room's players list
    room.players.push(existingUser._id);
    await room.save();

    return NextResponse.json({ success: true, roomId: room._id, userId: existingUser._id }, { status: 200 });
  } catch (error) {
    console.error("Error joining room:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
