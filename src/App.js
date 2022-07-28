import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"

function App() {

  const baseURL = "https://ih-crud-api.herokuapp.com"

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL + "/characters")
      .then(response => {
        setCharacters(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="App">
      <header>
        <h1>React Characters App</h1>
      </header>

      <div>
        {characters.slice(0,11).map((element,index) => {
          return (
            <div className='Characters' key={index}>
              <h3>Name:{element.name}</h3>
              <p>Occupation:{element.occupation}</p>
              <p>Weapon: {element.weapon}</p>
              <button>Delete</button>
            </div>)
        })}
      </div>

      <footer>This the footer</footer>

    </div>
  );
}

export default App;
