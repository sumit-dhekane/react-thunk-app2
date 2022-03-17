import { FETCH_ALBUM } from "../Constant/Constant";

const initialState=[]

function AlbumReducer(State=initialState,action){
     
    switch(action.type){

    case FETCH_ALBUM:
      return[...action.value]




    }
    return State
}
export default AlbumReducer;