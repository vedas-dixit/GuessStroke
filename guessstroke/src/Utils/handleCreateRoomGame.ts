

export default async function CreateRoomAndJoin(userName: string) {

  const response = await fetch("/api/room/create", {
    method: "POST",
    body: JSON.stringify({ userName}),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  if (!data.success) {
    console.error("Failed to create room:", data.error);
    return null;
  }
  console.log("data", data)

  const { roomId, roomCode } = data;

  return { roomId, roomCode };
}
