import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types"
import axios from "axios";

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

const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character)
      try {
         return dispatch({
            type: 'ADD_FAV',
            payload: data,
         })
      } catch (error) {
         console.log(error.message);
      }
   }
}

 const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint)
      try {
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
         })
      } catch (error) {
         console.log(error.message)
      }
   }
}

export {
    addFav,
    removeFav,
    filterCards,
    orderCards
}