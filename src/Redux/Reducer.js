
import { ADD_FAV,REMOVE_FAV } from "./actions"

const initialState ={
data:[],
myFavourites:[]
}

export default function rootReducer (state=initialState,action){
switch (action.type) {
    case ADD_FAV:return {
        ...state,myFavourites:[...state.myFavourites,action.payload]
    }
    case REMOVE_FAV:
    const newFavorites = state.myFavourites.filter((ch)=>ch.id  !==action.payload)    
    return {
        ...state,myFavourites:newFavorites 
    } 

    default: return {...state}
}


 
}