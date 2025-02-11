"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ValidRoomCode from "@/Utils/Validators/Validroomcode";

function HomePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const handleHostGame = () => {
    router.push(`/room/${roomCode}`);
  };

  const handleJoinGame = () => {
    if (ValidRoomCode(roomCode)) {
      router.push(`/room/${roomCode}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Guess Stroke</h1>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg text-center mb-4"
      />

      {/* Host Game Button */}
      <button
        onClick={handleHostGame}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition duration-300 mb-6"
      >
        Host Game
      </button>

      {/* Join Room Input & Button */}
      <div className="flex gap-2">
        <input
          type="number"
          
          placeholder="Enter Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg text-center"
        />
        <button
          onClick={handleJoinGame}
          disabled={!ValidRoomCode(roomCode)}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ${
            ValidRoomCode(roomCode)
              ? "bg-green-500 hover:bg-green-600"
              : "bg-gray-700 cursor-not-allowed"
          }`}
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default HomePage;
