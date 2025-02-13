"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import ValidRoomCode from "@/Utils/Validators/Validroomcode";
import CreateRoomAndJoin from "@/Utils/handleCreateRoomGame";
import JoinRoomWithCode from "@/Utils/handleJoinRoomGame";


function HomePage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  useEffect(()=>{
    const notify = () => toast("Welcome :)");
    notify()
  },[])
  
  const handleHostGame = async () => {
    if (userName !== "") {
      console.log(userName);
      const roomData = await CreateRoomAndJoin(userName);
  
      if (!roomData) {
        console.error("Room creation failed.");
        return;
      }
  
      const { roomId, roomCode } = roomData;
      localStorage.setItem("roomCode", roomCode);
      router.push(`/room/${roomCode}`);
    } else {
      toast("Please enter your name :)");
    }
  };

  const handleJoinGame = async () => {
    if (ValidRoomCode(roomCode) || userName !== "") {
      const response = await JoinRoomWithCode(roomCode, userName);
      if (response.success) {
        console.log(`Joined Room: ${response.roomId}, User ID: ${response.userId}`);
        router.push(`/room/${response.roomId}`);
      } else {
        console.error(response.error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <ToastContainer />

      <h1 className="text-4xl font-bold mb-6">Guess Stroke</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg text-center mb-4"
      />

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
          onChange={(e) => {
            if (e.target.value.length <= 6) {
              setRoomCode(e.target.value);
            }
          }}
          maxLength={6}
          className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg text-center"
          style={{ appearance: 'textfield' }}
        />
        <button
          onClick={handleJoinGame}
          disabled={!ValidRoomCode(roomCode)}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ${ValidRoomCode(roomCode)
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
