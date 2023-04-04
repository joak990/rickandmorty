import "./card.css";
import { Link } from "react-router-dom";
import { connect} from "react-redux";
import { useState } from "react";
import { addfav, removefav } from "../../Redux/actions"
function Card({name,image,id,addfav,removefav,onClose}) {

   const [isFav,setfav]=useState(false)

   const handleFavorite =()=>{
 if(isFav){
 setfav(false)
 removefav(id)
 }else{
   setfav(true)
   addfav({name,image,id,addfav,removefav,onClose})
 }


}


   return (
   
      <div className="card">
         {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
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

 function mapDispatchToProps (dispatch){
return{
addfav:(character)=>{dispatch(addfav(character))},
removefav:(id)=>{dispatch(removefav(id))}
}
 }

 export default connect(null,mapDispatchToProps)(Card)