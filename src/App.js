import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const baseURL = 'https://ih-crud-api.herokuapp.com';

  const [characters, setCharacters] = useState(null);

  useEffect( () => {
    fetchCharacters();
  }, []);


  const fetchCharacters = () => {
    axios
      .get(baseURL + '/characters')
      .then((response) => {
        const allCharacters = response.data;
        const fistTen = allCharacters.slice(0, 10)
        setCharacters(fistTen);
      })
      .catch((e) => {
        console.log(e);
      });
  }


  const renderCharacters = () => {
    const result = characters.map((element, index) => {
      return (
        <div key={index} className='Characters'>
          <h2>{element.name}</h2>
          <p>Occupation: {element.occupation}</p>
          <p>Weapon: {element.weapon}</p>

          <button onClick={() => { deleteCharacter(element.id) }}>Delete</button>
        </div>
      );
    });

    return result;
  }

  const deleteCharacter = (id) => {
    axios
      .delete(baseURL + '/characters/' + id)
      .then((response) => {
        fetchCharacters();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="App">
      <header>
        <h1>React Charates App</h1>
      </header>

      <div>
        { characters === null
          ? <p>loading...</p>
          : renderCharacters()
        }
      </div>

    </div>
  );
}

export default App;
