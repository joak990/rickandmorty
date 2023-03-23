import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import "./Detail.css"

export default function Detail() {
  const [character,setCharacter]=useState({})
  const {id} = useParams()
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
  

  return (
    <div className='container'>
       
       <div className='character-props'>
       {character.name && <p>Nombre: {character.name}</p>}
       {character.status && <p>status: {character.status}</p>}
       {character.species && <p>Especie: {character.species}</p>}
       {character.gender && <p>Genero: {character.gender}</p>}
       {character.name && <p>Nombre: {character.name}</p>}
       {character.origin && <p>Origen: {character.origin.name}</p>}
       </div>
        <div className='image-container'>
       {character.image && <img className='image-detail' src={character.image} alt=""/>}
       </div>
  
    </div>
  )
}
