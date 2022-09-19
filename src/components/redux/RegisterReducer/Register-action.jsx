import axios from "axios"
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./Register-action-type"




export const register = (cred) => (dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
    axios.post('https://masai-api-mocker.herokuapp.com/auth/register',{
        name:cred.name,
        email:cred.email,
        password:cred.password,
        username:cred.username,
        mobile:cred.mobile,
        description:cred.description,
    }).then((res)=>{
        return dispatch({type:AUTH_SIGN_IN_SUCCESS , payload:res.data})
    }).catch((error)=>{
        console.log(error)
    })
}