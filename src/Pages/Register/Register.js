import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../../JS/Actions/userActions'
import Button from 'react-bootstrap/esm/Button'
import { toast } from 'react-toastify'

const Register = () => {
    const dispatch=useDispatch()
    const Navigate=useNavigate()
    const [user,setUser]=useState({})
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    console.log(user)
    const handleRegister=async()=>{
       await dispatch(register(user))
       toast("registred successfully")
       Navigate("/profile")
    }

  return (
    <div>

<div className="login-page">
  <div className="form">
    <form className="login-form">
      <input type="text" name='name' placeholder="name" onChange={(e)=>handleChange(e)}/>
      <input type="password" name='password' placeholder="password" onChange={(e)=>handleChange(e)}/>
      <input type="text" name='email' placeholder="email address" onChange={(e)=>handleChange(e)}/>
      <input type="text" name='lastName' placeholder="LastName" onChange={(e)=>handleChange(e)}/>
      <input type="number" name='age' placeholder="age" onChange={(e)=>handleChange(e)}/>
      <input type="number" name='phone' placeholder="phone" onChange={(e)=>handleChange(e)}/>
      <input type="text" name='photo' placeholder="photo" onChange={(e)=>handleChange(e)}/>
      <Button onClick={()=>handleRegister()}>create</Button>
      
    </form>
    
  </div>
</div>
    </div>
  )
}

export default Register