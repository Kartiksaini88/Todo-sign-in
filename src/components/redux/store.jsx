import { applyMiddleware, combineReducers, compose, legacy_createStore as createstore } from "redux";
import thunk from "redux-thunk";
import { loginreducer } from "./LoginReducer/login-reducer";
import { registerReducer } from "./RegisterReducer/RegisterReducer";
import { getuserbyIDreducer } from "./getuser/getuser-reducer";


export const store = createstore(
    combineReducers({
        register:registerReducer,
        login:loginreducer,
        getuser:getuserbyIDreducer,
         
    }),
    compose(applyMiddleware(thunk))
)


