const initialState = {
    Token : ""
}
const userTokenAccess = (state = initialState,action)=>{
    switch(action.type){
        case "SET_TOKEN": return {
            ...state,
            Token: action.payload
          };
        case "RESET_TOKEN": return {
            ...state,
            Token : ""
        }
        default : return state
    }
}

export default userTokenAccess