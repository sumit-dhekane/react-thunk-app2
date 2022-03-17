

const initialState=[]

function PhotoReducer (State=initialState,action){

    switch(action.type){

        case 'GET_PHOTO':
    
    return [...action.value]


      

    }
    return State;


}
export default PhotoReducer;