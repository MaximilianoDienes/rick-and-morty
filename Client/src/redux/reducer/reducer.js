import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/types"
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const compareById = (a, b) => {
    return a.id - b.id;
}

const compareByIdDesc = (a, b) => {
    return b.id - a.id;
  };

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {        
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
        }

        case FILTER:
            if (payload === "All") return {
                ...state,
                myFavorites: [...state.allCharacters]
            }

            let filteredList = [...state.allCharacters].filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: filteredList
        }
        
        case ORDER:
            if (payload === "A") {
                let orderedList = [...state.allCharacters].sort(compareById)
                return {
                    ...state,
                    myFavorites: orderedList,
                }
            }

            if (payload === "D") {
                let orderedList = [...state.allCharacters].sort(compareByIdDesc)
                return {
                    ...state,
                    myFavorites: orderedList
                }
            }
        
        case REMOVE_FAV:
            let listWithoutFavorite = [...state.myFavorites].filter(
                (personaje) => personaje.id !== Number(payload))
            return {
                ...state,
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