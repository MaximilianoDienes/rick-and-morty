import Card from "../card/Card"
import { connect , useDispatch} from "react-redux"
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useState } from "react";

export const Favorites = (props) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
        console.log(event.target.value);
    }

    return (
        <div>
            <div style={{display: "flex", top: "3rem", position: "relative"}}>
                <select onChange={handleOrder} >
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>

            {props.myFavorites.map(character =>
            <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={() => props.onClose(character.id)}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps, null)(Favorites);