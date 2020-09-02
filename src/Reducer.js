//The initial state of the data layer
export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null
}

//STATE: HOW THE INITIALSTATE LOOKS
//ACTION : UPDATES DE INITIALSTATE
//REDUCER LISTENS TO ACTIONS
const reducer = (state,action) =>{

    console.log(action);
    //ACTION -> type , [payload]
    // the action has a TYPE
    switch(action.type) {
        //WHEN YOU RECEIVE AN ACTION CALLED SET_USER
        case 'SET_USER':
            return{
                ...state,
                user : action.user,
            }
        default: return state;
    }

}

export default reducer;