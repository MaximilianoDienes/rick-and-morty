//Cards

import styles from "./Cards.module.css"
import Card from "../card/Card"

export default function Cards({characters, onClose}) {
   return (
   <div className={styles.container}>
      {characters.map(character => (
         <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={onClose}
         />
      ))} 
   </div>
   )
}