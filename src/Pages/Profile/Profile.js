
import Spinner from 'react-bootstrap/Spinner';
import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user=useSelector(state=>state.userReducer.user)
  const load=useSelector(state=>state.userReducer.load)
  console.log(user)
  return (
    <div>
      {load?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:<div>Profile

<h1>{user?.name}</h1>
</div>}
    </div>
  )
}

export default Profile