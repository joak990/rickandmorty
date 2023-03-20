import "./card.css";
import React, { useState } from "react";
export default function Card(props) {
   const [showCard, setShowCard] = useState(true);
   const handleClose = () => {
      setShowCard(false);
  setTimeout(() => {
    setShowCard(null); // null para eliminar la tarjeta del DOM
  }, 5000); // tiempo en milisegundos para esperar la transición
};

   if (!showCard) {
     return null;} // si la tarjeta no se muestra, retorna null
   return (
   
      <div className="card">
        
          <button className="close" onClick={handleClose}>X</button>
          
          <button className="ver-personaje">Ver personaje</button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img className="img" src={props.image} alt='' /> 
    
      
      </div>
      
   );
}
