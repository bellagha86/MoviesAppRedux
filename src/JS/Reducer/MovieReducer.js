import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from '../Constants/actionTypes'
import {MovieArray} from '../../Components/data'

const initialState = {
    MovieArray
}

const movieReducer= (state = initialState, { type, payload, id }) => {
    switch (type) {

    case ADD_MOVIE:
        return {
            ...state,
            MovieArray:[...state.MovieArray,payload]
        }
        case DELETE_MOVIE:
            return {
                ...state,
                MovieArray : state.MovieArray.filter(el => el.id !== payload )
            }    
        case EDIT_MOVIE:
        return {
            ...state,
            MovieArray:state.MovieArray.map(el=>el.id===payload.id?payload:el)
        }
       
    default:
        return state
    }
}
export default movieReducer