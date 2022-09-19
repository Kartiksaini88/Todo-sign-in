import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS } from "./Register-action-type"


export const registerState = {
    loading : false,
    error:false,
    message:"",
    isregister: false
}

export const registerReducer = (state = registerState , {type , payload})=>{
    switch(type){
        case AUTH_SIGN_IN_LOADING:{
            return {...registerState , loading:true , error:false}
        }
        case AUTH_SIGN_IN_SUCCESS:{
            return {...registerState , message:payload , loading:false , error:false , isregister:true}
        }
        case AUTH_SIGN_IN_ERROR:{
            return {...registerState , loading:false , error:true}
        }
        default:{
            return state
        }
    }
}