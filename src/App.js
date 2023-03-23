import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import About from './views/About';
import Detail from './components/Detail';
import Form from './components/Form/Form';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//component app
function App() {
   const location = useLocation()
   const [randomCharacter,setRandomCharacter]=useState(null)
   const [characters,setCharacters] = useState([])
   const [access,setAccess]=useState(false)
   const EMAIL ="joakhaid@gmail.com"
   const PASSWORD = "joak123"
  const Navigate = useNavigate()


useEffect(()=>{
!access &&Navigate("/")
},[access])

//funcion login

const login =(userData)=>{
         if(userData.password===PASSWORD&&userData.username===EMAIL){
         setAccess(true)
         Navigate('/home')
}else {
  alert("credenciales invalidas")
}
}


   //function filter
   const onClose =  (id) =>{
      setCharacters(characters.filter(character=>character.id !==id))}
//function random character
    function getRandomCharacter() {
      axios(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random()*671)}`)
        .then(({ data }) => {
          setRandomCharacter(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }

//function search character with id and validate repeat id
   function onSearch (id) {
      if (randomCharacter && randomCharacter.id === id) {
         setCharacters((oldChars) => [...oldChars, randomCharacter]);
         setRandomCharacter(null);}

      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            const characteralredyexist = characters.find((characters) =>
            characters.id ===data.id)
            if(characteralredyexist){
               window.alert('este personaje ya esta en la lista')
            }else
            setCharacters((oldChars) => [...oldChars, data]);
            } 
         else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   return (
            //render of components      
         <div className='App'>
      {location.pathname !== '/' && <Nav getRandomCharacter={getRandomCharacter} onSearch={onSearch} />}
        <Routes>
        <Route  path='/' element={<Form login={login}/>}></Route>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
      
      </div>
   );
}

export default App;
