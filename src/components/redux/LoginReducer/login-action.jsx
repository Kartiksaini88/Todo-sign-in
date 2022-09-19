import { SIGN_IN_ERROR, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "./login-action-type"
import axios from "axios"



export const login = (cred) => (dispatch)=>{
    dispatch({type:SIGN_IN_LOADING})

    axios.post("https://masai-api-mocker.herokuapp.com/auth/login",{
        password:cred.password,
        username:cred.username
    }).then((r)=>{
        return dispatch({type:SIGN_IN_SUCCESS , payload:r.data})
    }).catch(()=>dispatch({type:SIGN_IN_ERROR}))
}