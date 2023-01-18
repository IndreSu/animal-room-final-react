import { useState, useEffect } from "react";
import { AnimalRoomMover } from "../components/AnimalRoomMover";
import { useParams } from "react-router-dom";

export function ViewAnimal(props) {
  const [animal, setAnimal] = useState({});

  const params = useParams();

  //parodomo kiekvieno animal properties
  useEffect(() => {
    fetch("/api/v1/animals/" + params.id)
      .then((response) => response.json())
      .then(setAnimal);
  }, [params.id]);

  return (
    <div>
      <div>
        <b>ID</b>
      </div>
      <div>{animal.id}</div>

      <div>
        <b>Name</b>
      </div>
      <div>{animal.name}</div>

      <div>
        <b>Type</b>
      </div>
      <div>{animal.type}</div>

      <div>
        <b>Description</b>
      </div>
      <div>{animal.description}</div>

      <div>
        <b>Room</b>
      </div>

      <div>{animal.room && animal.room.name}</div>
      <AnimalRoomMover id={params.id} onAnimalChange={setAnimal} />
    </div>
  );
}
