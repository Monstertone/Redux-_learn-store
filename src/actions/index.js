import axios from 'axios'

export const GET_CAMERAS = 'GET_CAMERAS'
export const SEARCH_CAMERAS = 'SEARCH_CAMERAS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const getCameras = () => {
    return dispatch => {
        axios.get('http://localhost:8082/api/cameras')
        .then(response => dispatch ({
            type: GET_CAMERAS,
            payload: response.data
        }))
    }
}

export const addToCart = (id) => {
    return dispatch => {
       dispatch({
           type: ADD_TO_CART,
           payload: id
       }) 
    }
}

export const removeFromCart = (id) => {
    return dispatch => {
       dispatch({
           type: REMOVE_FROM_CART,
           payload: id
       }) 
    }
}
