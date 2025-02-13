import { useEffect } from "react";
import socket from "@/lib/socket";

export function useSocket(roomId: string, onMessageReceived: (msg: string) => void) {
  useEffect(() => {
    if (!roomId) return;

    socket.emit("join-room", roomId);

    socket.on("player-joined", (data) => {
      console.log(`Player joined:`, data);
    });

    socket.on("receive-message", (message) => {
      onMessageReceived(message);
    });

    return () => {
      socket.off("player-joined");
      socket.off("receive-message");
    };
  }, [roomId]);
}
