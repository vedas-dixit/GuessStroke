export default function ValidRoomCode(roomcode: string) {
    return /^\d{6}$/.test(roomcode);
}