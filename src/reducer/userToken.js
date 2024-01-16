const initialState = {
    Token : {
        "accessToken" : localStorage.getItem("accessToken") ? localStorage.getItem("accessToken") : null,
        "refreshToken" : localStorage.getItem("refreshToken") ? localStorage.getItem("refreshToken") : null
    } 
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