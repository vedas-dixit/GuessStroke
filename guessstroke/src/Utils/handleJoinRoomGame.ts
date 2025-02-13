export default async function JoinRoomWithCode(roomCode: string, userName: string) {
    try {
      const response = await fetch("/api/room/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roomCode, userName }),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error joining room:", error);
      return { success: false, error: "Something went wrong" };
    }
  }
  