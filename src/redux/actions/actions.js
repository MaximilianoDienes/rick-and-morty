import { ADD_FAV, REMOVE_FAV } from "./types"

const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje
    }
}

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export {
    addFav,
    removeFav
}