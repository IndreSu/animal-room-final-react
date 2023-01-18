// import { useState } from "@testing-library/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function AnimalListPage(props) {
  const [animals, setAnimals] = useState([]);
  const JSON_HEADERS = {
    "Content-Type": "application/json",
  };

  const fetchAnimals = () => {
    fetch("/api/v1/animals")
      .then((response) => response.json())
      .then((jsonResponse) => setAnimals(jsonResponse));
  };

  //kad gautime visa gyvunu lista
  useEffect(() => {
    fetchAnimals();
  }, []);

  const removeAnimal = (id) => {
    fetch(`/api/v1/animals/` + id, {
      method: "DELETE",
      headers: JSON_HEADERS,
    }).then(fetchAnimals);
  };

  return (
    <div>
      <h2>Animals</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vardas</th>
            <th>Tipas</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <body>
          {animals.map((animal) => (
            <tr key={animal.id}>
              <td>
                <Link to={"/animals/view/" + animal.id}>{animal.id}</Link>
              </td>
              <td>{animal.name}</td>
              <td>{animal.type}</td>
              <td>{animal.description}</td>
              <td>
                <button onClick={() => removeAnimal(animal.id)}>Remove</button>
              <Link to={'/animals/update/' + animal.id}>
                <button>Update</button></Link>
              </td>
            </tr>
          ))}
        </body>
      </table>
    </div>
  );
}
