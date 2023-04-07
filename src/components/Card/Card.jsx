import "./card.css";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { addfav,removefav } from "../../Redux/actions";
 export default function Card({name,image,id,onClose,myFavorites,species,}) {
   const dispatch = useDispatch()
   const [isFav,setfav]=useState(false)

   const handleFavorite =()=>{
 if(isFav){
 setfav(false)
  dispatch(removefav(id))
 }else{
   setfav(true)
   dispatch(addfav({name,image,id,onClose}))
 }
}

const {allCharacters}=useSelector ((state)=>state)
useEffect(() => {
   allCharacters.forEach((fav) => {
      if (fav.id === id) {
         setfav(true);
      }
   });
}, [allCharacters]);






   return (
   
      <div className="card">
         {
         isFav ? (
         <button  onClick={handleFavorite}>❤️</button>
         ) : (
        <button onClick={handleFavorite}>🤍</button>
         )
         }
          <button className="close" onClick={onClose}>X</button>
          <Link to={`/detail/${id}`}>
          <button className="ver-personaje">Ver personaje</button>
          </Link>
         <h2>{name}</h2>
         <img className="img" src={image} alt='' /> 
      </div>
      
   );
}


