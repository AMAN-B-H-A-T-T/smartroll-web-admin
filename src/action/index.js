export const set_Token = (tokens) =>{
    return {
        type:"SET_TOKEN",
        payload:tokens
    }
}
export const reset_token = () =>{
    return {
        type:"RESET_TOKEN"
    }
}