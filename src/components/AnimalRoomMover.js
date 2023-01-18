import { useState, useEffect } from "react";

export function AnimalRoomMover(props) {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    fetch("/api/v1/rooms")
      .then((response) => response.json())
      .then(setRooms);
  }, []);

  //backtick
  const assignAnimalToRoom = () => {
    fetch(`/api/v1/animals/${props.id}/addroom?roomId=${selectedRoom}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => response.json())
    .then((animal) => props.onAnimalChange(animal));
};


  return (
    <div>
      <select
        value={selectedRoom}
        onChange={(e) => setSelectedRoom(e.target.value)}
      >
        <option>...</option>
        {rooms.map((room) => (
          <option key={room.id} value={room.id}>{room.name}</option>
        ))}
      </select>
      <button onClick={assignAnimalToRoom}>Assign</button>
    </div>
  );
}
