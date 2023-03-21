import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
//component app
function App() {
   const [randomCharacter,setRandomCharacter]=useState(null)
   const [characters,setCharacters] = useState([])
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
          <Nav  getRandomCharacter={getRandomCharacter} onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      

      </div>
   );
}

export default App;
