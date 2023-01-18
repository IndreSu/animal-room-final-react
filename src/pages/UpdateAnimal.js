import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './UpdateAnimal.css';

export function UpdateAnimalPage() {
  const params = useParams();

  const [error, setError] = useState();

  const [animal, setAnimal] = useState({
    name: "",
    type: "",
    description: "",
  });

  useEffect(() => {
    fetch("/api/v1/animals/" + params.id)
      .then((response) => response.json())
      .then(setAnimal);
  }, []);

  const updateAnimal = () => {
    fetch("/api/v1/animals/" + params.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    }).then(result => {
        if(!result.ok){
            setError('Update failed');
        } else {
            setError();
        }
    });
  };

  const updateProperty = (property, event) => {
    setAnimal({
      ...animal,
      [property]: event.target.value,
    });
  };

  return (
    <div className='Update-Animal'>
      <h2> Update animal </h2>

      <fieldset>
        <legend>{params.id}</legend>

        {error && <div className='error'>{error}</div>}

        <label>Name</label>
        <input
          value={animal.name}
          onChange={(e) => updateProperty("name", e)}
        />

        <label>Type</label>
        <select value={animal.type} onChange={(e) => updateProperty("type", e)}>
          <option value="TIGER">Tiger</option>
          <option value="LION">Lion</option>
          <option value="GIRAFFE">Giraffe</option>
          <option value="PARROT">Parrot</option>
          <option value="RABBIT">Rabbit</option>
        </select>

        <label>Description</label>
        <input
          value={animal.description}
          onChange={(e) => updateProperty("description", e)}
        />

        <button onClick={updateAnimal}>Update</button>
      </fieldset>
    </div>
  );
}
