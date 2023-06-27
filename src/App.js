import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Routes,Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import UpdateProfile from './components/UpdateProfile';
import ForgotPassword from './components/ForgotPassword';
import { useEffect, useState } from 'react';

function App() {
  const [token,setToken] = useState(localStorage.getItem('token'))
  useEffect(()=>{
   setToken(localStorage.getItem('token'))
  },[Welcome])
  return (
    <div className="App">
      <Routes>
      <Route path='*' element={<Login />} />
      <Route path='/' element={<Login />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
    {token && <Route path='/welcome' element={<Welcome />} />}
       <Route path='/update-profile' element={<UpdateProfile />} />
      </Routes>
     
    </div>
  );
}

export default App;
