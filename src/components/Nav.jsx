import React from 'react'
import SearchBar from './searchbar/SearchBar'
import {NavLink} from 'react-router-dom'
import "./Nav.css"
export default function Nav(props) {
  return (
    <div className='container-all'>
      <div className='container-buttons'>
      <NavLink to="/about">
      <button className='about-button'>About</button>
      </NavLink> 
      <NavLink to="/home">
      <button className='home-button'>Home</button>
      </NavLink>
      <button className='getrandom-button' onClick={props.getRandomCharacter}>Aleatorio</button>
      </div>
      <SearchBar onSearch={props.onSearch}/> 
    </div>
  )
}
