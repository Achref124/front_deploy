import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/Navb';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/Actions/userActions';
import Error from './Pages/Error/Error';
import Photo from './Pages/photo/Photo';
function App() {
  const user=useSelector(state=>state.userReducer.user)
  const dispatch=useDispatch()
  const fix=0
  useEffect(()=>{
    dispatch(current())
    
  },[fix])
  
  return (
    <div className="App">
    <Navb />
    <Routes>
      <Route path='/' element={<Home />} />
     {!user?<Route path='/login' element={<Login />} />:null} 
      {!user?<Route path='/Register' element={<Register />} />:null}
      {user?<Route path='/profile' element={<Profile />} />:null}
<Route path='/*' element={<Error />} />
<Route path='/photo' element={<Photo />} />
    </Routes>

    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />
    </div>
  );
}

export default App;
