import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types"

const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

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
    removeFav,
    filterCards,
    orderCards
}