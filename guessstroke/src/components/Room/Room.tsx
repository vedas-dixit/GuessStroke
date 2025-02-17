import React from "react";


function RoomComponent() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-900">
      <div className="lg:w-1/4 p-4 bg-gray-800 text-white overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Players</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">A</div>
            <p className="text-lg">Player1</p>
            <span className="ml-2 text-sm text-yellow-400">Host</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-2">B</div>
            <p className="text-lg">Player2</p>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mr-2">C</div>
            <p className="text-lg">Player3</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 p-4 flex justify-center items-center bg-gray-700">
        <div className="relative w-full h-full bg-white border-2 border-gray-600">
          <p className="absolute top-1/2 left-1/2 text-xl font-semibold text-gray-600 transform -translate-x-1/2 -translate-y-1/2">
            Drawing Area
          </p>
        </div>
      </div>

      {/* Right Section: Chat */}
      <div className="lg:w-1/4 p-4 bg-gray-800 text-white flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Chat</h2>
        <div className="flex-1 overflow-auto bg-gray-600 p-4 mb-4 rounded-lg">
          {/* Placeholder for chat messages */}
          <div className="mb-2">
            <p className="text-sm text-blue-300">Player1: Hello!</p>
            <p className="text-sm text-green-300">Player2: Hi there!</p>
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 bg-gray-500 text-white rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
          />
          <button className="p-2 bg-blue-600 text-white rounded-r-lg">Send</button>
        </div>
      </div>

      {/* Bottom Left: Room Code */}
      <div className="absolute bottom-4 left-4 text-white text-lg bg-black px-4 py-2 rounded-lg">
        <span>Room Code: 123ABC</span>
      </div>
    </div>
  );
}

export default RoomComponent;
