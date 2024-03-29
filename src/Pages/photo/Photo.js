import React, { useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
const Photo = () => {
  const [photo,setPhoto]=useState()
  const formData= new FormData()
  formData.append('photo',photo)
  const uploadPhoto=async()=>{
    let result=await axios.post("https://workshop-back-suui.onrender.com/api/cloudinary/photo",formData)
    console.log(result)
  }
  return (
    <div>photo

<form  encType="multipart/form-data">
  <input type="file" name="avatar" onChange={(e)=>setPhoto(e.target.files[0])}/>
</form>
<Button onClick={uploadPhoto}>upload photo</Button>
    </div>
  )
}

export default Photo