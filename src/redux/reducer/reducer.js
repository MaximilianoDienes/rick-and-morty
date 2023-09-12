import { ADD_FAV, REMOVE_FAV } from "../actions/types"
const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {        
        case ADD_FAV:
            return {
                myFavorites: [...state.myFavorites, action.payload]
        }
        
        case REMOVE_FAV:
            let listWithoutFavorite = [...state.myFavorites].filter(
                (personaje) => personaje.id !== parseInt(action.payload))
            return {
                myFavorites: listWithoutFavorite
        }

        default:
            return {
                ...state
        }
    }
}

export {
    reducer
}