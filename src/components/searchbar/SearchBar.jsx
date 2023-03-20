import "./searchbar.css";


export default function SearchBar(props) {
   return (
      <div>
          <input placeholder="Introduzca el nombre a agregar" className="inputsearch" type='search' />
         <button className="boton-search" onClick={()=>props.onSearch()}>Agregar</button> 
      </div>
   );
}
