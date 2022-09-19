import axios from "axios"
import { GETUSER_SUCCESS, GETUSER_ERROR, GETUSER_LOADING } from "./getuser-action-type"





export const getuserbyID = (username,token)=>(dispatch)=>{
    dispatch({type:GETUSER_LOADING})

    axios.get(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }  
    }).then((r)=>{
        return dispatch({type:GETUSER_SUCCESS,payload:r.data}) 
    }).catch((error)=>{
        dispatch({type:GETUSER_ERROR})
        // console.log(error)
        
    })

}