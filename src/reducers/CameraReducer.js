import { GET_CAMERAS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/index'

export default(state = [], action) => {
    switch(action.type){
        case GET_CAMERAS:
        console.log(action.payload)
            return [...action.payload]

        case ADD_TO_CART:
            let otherCams = state.filter(camera => camera.id !== action.payload)
            let selectedCam = state.filter(camera => camera.id === action.payload)[0]
            let updatedCam = {
                ...selectedCam,
                inCart: true
            }
                return [...otherCams, updatedCam].sort((a, b) => a.id > b.id)

        case REMOVE_FROM_CART:
            let camsInCart = state.filter(camera => camera.id !== action.payload)
            let removeCam = state.filter(camera => camera.id === action.payload)[0]
            let updatedCart = {
            ...removeCam,
            inCart: false
            }
                return [...camsInCart, updatedCart].sort((a, b) => a.id > b.id)
        
        // case SEARCH_CAMERAS:
        //     let searched = state.filter(camera => camera.name === action.payload)
        //     return [...searched]
        default:
            return state
    }
}