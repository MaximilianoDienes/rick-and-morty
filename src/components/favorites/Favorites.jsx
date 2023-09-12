import Card from "../card/Card"
import { connect } from "react-redux"

export const Favorites = (props) => {
    console.log(props);
    return (
        <div>
            {props.myFavorites.map(character =>
            <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites);