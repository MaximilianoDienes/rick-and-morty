//App
import './App.css';
import axios from 'axios';
import Cards from './components/cards/Cards';
import { useState } from 'react';
import Nav from './components/nav/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';

function App() {

   const [characters, setCharacters] = useState([]);

   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== parseInt(id)))
   }

   const onSearch = (id) => {
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
      .catch(() => alert("No existe ningun personaje con el ID ingresado."))
      
      ;
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
