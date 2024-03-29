import { CURRENT, EDIT_PASSWORD, FAIL_USER, LOAD_USER, LOGIN, LOGOUT, REGISTER } from "../ActionType/ActionType"
import axios from 'axios';

export const register=(newUser)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result= await axios.post("https://workshop-back-suui.onrender.com/api/user/register",newUser)
       
        dispatch({type:REGISTER,payload:result.data})
    } catch (error) {
        
        dispatch({type:FAIL_USER,payload:error.response})
    }
}

export const login=(user)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result= await axios.post("https://workshop-back-suui.onrender.com/api/user/login",user)
        dispatch({type:LOGIN,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.error})
    }
}

export const changePassword=(_id,password)=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        let result= await axios.put(`https://workshop-back-suui.onrender.com/api/user/editpassword/${_id}`,password)
        dispatch({type:EDIT_PASSWORD,payload:result.data})
    } catch (error) {

        dispatch({type:FAIL_USER,payload:error.error})
    }
}

export const logout=()=>async(dispatch)=>{
    try {
        dispatch({type:LOGOUT})
    } catch (error) {
        console.log(error)
    }
}

export const current=()=>async(dispatch)=>{
    dispatch({type:LOAD_USER})
    try {
        const config = {
            headers: {authorization: localStorage.getItem('token')}
        }
        console.log(config)
        let result=await axios.get("https://workshop-back-suui.onrender.com/api/user/current",config)
        dispatch({type:CURRENT,payload:result.data})
    } catch (error) {
        console.log(error)
    }
}