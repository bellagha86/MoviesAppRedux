import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from '../Constants/actionTypes'
import { v4 as uuidv4 } from 'uuid';

export const addMovie= payload=>({
    type: ADD_MOVIE,payload:{
        ...payload,
        id:uuidv4()
    }
})
export const editMovie= payload=>({
    type: EDIT_MOVIE,payload
})
export const deleteMovie= payload=>({
    type: DELETE_MOVIE,payload
})