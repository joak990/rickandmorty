import "./searchbar.css";
import { useState } from "react";


export default function SearchBar(props) {
const [id,setId]=useState("")
const handleChange  = (event)=>{
const {value} = event.target
setId(value)
}
   return (
      <div>
          <input  onChange={handleChange} id="" placeholder="Introduzca el nombre a agregar" className="inputsearch" type='search' />
         <button className="boton-search" onClick={()=>props.onSearch(id)}>Agregar</button> 
      </div>
   );
}
