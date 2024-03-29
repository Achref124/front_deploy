import React, { useState } from 'react'
import "./Login.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../JS/Actions/userActions'
import { toast } from 'react-toastify'
const Login= () => {
const [user,setUser]=useState({})
const dispatch=useDispatch()
const Navigate=useNavigate()
const handleChange=(e)=>{
  
setUser({...user,[e.target.name]:e.target.value})
}
const handleClick=async()=>{
 dispatch(login(user))
  
  Navigate("/profile")
}
  return (
    <div>
        <div className="login-page">
  <div className="form">
    <form className="login-form">
    <input type="text" name='email' placeholder="email address" onChange={(e)=>handleChange(e)}/>
      <input type="password" name='password' placeholder="password" onChange={(e)=>handleChange(e)} />
      
      <button onClick={()=>handleClick()}>sign in</button>
      
    </form>
    
  </div>
</div>
    </div>
  )
}

export default Login
