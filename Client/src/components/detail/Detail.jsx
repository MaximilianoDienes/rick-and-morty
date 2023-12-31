import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Detail() {

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    if (character.name) return (
        <div>
            <h1>{character.name}</h1>
            <h3>Status | {character.status}</h3>
            <h3>Species | {character.species}</h3>
            <h3>Gender | {character.gender}</h3>
            <h3>Origin | {character.origin.name}</h3>
            <img src={character.image} alt={character.name}/>
        </div>
    )
}