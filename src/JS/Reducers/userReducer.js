import { toast } from "react-toastify"
import { CURRENT, EDIT_PASSWORD, FAIL_USER, LOAD_USER, LOGIN, LOGOUT, REGISTER } from "../ActionType/ActionType"


//initialState
const initialState={
    user:null,
    load:false,
    error:null
}


//pure function

const userReducer=(state=initialState,{type,payload})=>{
console.log(payload)
    switch (type) {
        case LOAD_USER :
            return{...state,load:true}
        case REGISTER:
                localStorage.setItem("token",payload.token)
                toast(payload.msg)
            return{...state,user:payload.newUser,load:false}
        case LOGIN :
            toast(payload.msg)
                localStorage.setItem("token",payload.token)
            return{...state,load:false,user:payload.foundUser}
        case FAIL_USER:
            toast(payload.msg)
            return{...state,error:payload.error,load:false}
        case EDIT_PASSWORD:
            toast()
            return{...state,load:false}
            
        case LOGOUT:
            localStorage.removeItem("token")
            toast("logged out successfully!")
            return{...state,user:null}
        case CURRENT:
            return{...state,user:payload,load:false}
        default:
            return state
    }
}
export default userReducer
