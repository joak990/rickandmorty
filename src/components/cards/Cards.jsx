import Card from '../Card/Card';
import  './cards.css';
export default function Cards(props) {
return(
<div className='container'>

      {props.characters.map((character,index) => (
        <Card 
        
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      ))}
  
    </div>
  );
}