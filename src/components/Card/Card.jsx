import "./card.css";

export default function Card(props,onClose,id) {
  
 


   return (
   
      <div className="card">
        
          <button className="close" onClick={props.onClose}>X</button>
          
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
