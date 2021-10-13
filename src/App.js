import './App.css';
import { useEffect, useState } from 'react'
import CharactersContainer from './Pages/CharactersContainer/CharactersContainer.js';

const baseURL = 'http://hp-api.herokuapp.com/api/characters';


function App() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    fetch(baseURL)
      .then(response => response.json())
      .then(characters => setCharacters(characters))
  }

  useEffect(getCharacters, [])
  
  return (
    <>
      <div className="App">
        <div className="title-container">
          <h1 className="title">Welcome to the Wizarding World of Harry Potter</h1>
        </div>
        <CharactersContainer characters={characters}/>
      </div>
    </>
  );
}

export default App;
