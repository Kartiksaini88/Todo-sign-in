import { SIGN_IN_ERROR, SIGN_IN_LOADING, SIGN_IN_SUCCESS } from "./login-action-type"

export const logininitstate = {
    loading:false,
    error:false,
    token:"",
    isauth:false,
}

export const loginreducer = (state=logininitstate , {type , payload})=>{
    switch(type){
        case SIGN_IN_LOADING:{
            return {...logininitstate , loading:true , error:false}
        }
        case SIGN_IN_SUCCESS:{
            localStorage.setItem("token",JSON.stringify(payload.token))
            return {...logininitstate , token:payload ,isauth:true, loading:false,error:false}
        }
        case SIGN_IN_ERROR:{
            return{...logininitstate,error:true,loading:false}
        }
        default:{
            return state
        }
    }
}