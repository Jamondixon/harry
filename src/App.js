import './App.css';
import { useEffect, useState } from 'react'
import CharactersContainer from './Pages/CharactersContainer'
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
    <div className="App">
      <CharactersContainer characters={characters}/>
    </div>
  );
}

export default App;
