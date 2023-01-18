import { useState } from "react";
import { useHref } from "react-router-dom";



export function CreateAnimalPage(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("TIGER");
  const [description, setDescription] = useState("");

  const listUrl = useHref('/');

  const clear = () => {
    setName("");
    setType("");
    setDescription("");
  };

  const applyResult = (result) => {
    if (result.ok) {
      clear();
    } else {
      window.alert("Nepavyko sukurti: " + result.status);
    }
  };

  // naudosim fetch api, leidzia daryti uzklausas i servisa
  //pazymime, kad siunciame json - prideti header
  

  const createAnimal = () => {
    //package.json nurodome local host adresa, cia paliekam tik kas po port
    fetch("/api/v1/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        type,
        description,
        registered: false,
      }),
    }).then(applyResult)
    .then(() => window.location = listUrl);
  };

  return (
    <fieldset id="create">
      <legend>Create new animal</legend>

      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="type">Type: </label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="TIGER">Tiger</option>
          <option value="LION">Lion</option>
          <option value="GIRAFFE">Giraffe</option>
          <option value="PARROT">Parrot</option>
          <option value="RABBIT">Rabbit</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <button onClick={createAnimal}>Create</button>
      </div>
    </fieldset>
  );
}
