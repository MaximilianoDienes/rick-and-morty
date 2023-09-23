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
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAV',
             payload: data,
          });
       });
    };
 };

 const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

export {
    addFav,
    removeFav,
    filterCards,
    orderCards
}