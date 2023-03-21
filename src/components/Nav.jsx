import React from 'react'

import SearchBar from './searchbar/SearchBar'

export default function Nav(props) {
  return (
    <div><button onClick={props.getRandomCharacter}> Agregar Personaje Aleatorio</button>
      <SearchBar onSearch={props.onSearch}/> 
  
    </div>
  )
}
