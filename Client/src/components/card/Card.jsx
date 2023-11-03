//Card

import { connect } from "react-redux";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions"
import { useState, useEffect } from "react";

export function Card(props) {

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      })
   }, [props.myFavorites]);
   

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         props.removeFav(props.id)
      }

      if (isFav === false) {
         setIsFav(true);
         props.addFav(props)
      }
   }

   return (
      <div className = {styles.container}>
         {
            isFav ? (<button onClick={handleFavorite} className={styles.heartButton}>❤️</button>) 
            : (<button onClick={handleFavorite} className={styles.heartButton}>🤍</button>)
         }

         <button onClick={() => {props.onClose(props.id)}}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin.name}</h2>
         <img src={props.image} alt={props.name} />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);