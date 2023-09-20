//App
import './App.css';
import axios from 'axios';
import Cards from './components/cards/Cards';
import { useState, useEffect } from 'react';
import Nav from './components/nav/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

function App() {

   const navigate = useNavigate();

   const location = useLocation().pathname;

   const isSlash = (location === "/")

   const [characters, setCharacters] = useState([]);

   const EMAIL = "maxdienes@gmail.com"
   const PASSWORD = "password12"

   // const [EMAIL, setEMAIL] = useState();

   // const [PASSWORD, setPASSWORD] = useState();

   // const handleChangeOnForm = (userData) => {
   //    setEMAIL(userData.email);
   //    setPASSWORD(userData.password);
   // }

   const onClose = (id) => {
      setCharacters(characters.filter(character => character.id !== parseInt(id)))
   }

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
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

   const [access, setAccess] = useState(false);

   const logIn = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home");
      }
      else alert("Los datos son inválidos, porfavor verifique la información ingresada.")
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logOut = () => {
      setAccess(false);
      alert("Fuiste desloggeado exitosamente.")
   }

   return (
      <div className='App'>
         {isSlash ? null : <Nav onSearch={onSearch} logOut={logOut}/>}
         <Routes>
         <Route path="/favorites" element={<Favorites onClose={onClose}/>}/>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
         <Route path="/" element={<Form logIn={logIn}/>}/>
         </Routes>
      </div>
   );
}

export default App;
