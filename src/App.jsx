//App
import './App.css';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav';

function App() {

   const [characters, setCharacters] = useState([]);

   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== parseInt(id)))
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (characters.some(character => character.id === parseInt(id))) {
            window.alert("El personaje ya ha sido ingresado anteriormente.");
            return;
         }
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('Ingrese un ID por favor.');
         }
      })
      .catch((error) => alert("No existe ningun personaje con el ID ingresado."))
      
      ;
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
