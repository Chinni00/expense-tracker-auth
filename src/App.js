import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Routes,Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/update-profile' element={<UpdateProfile />} />
      </Routes>
     
    </div>
  );
}

export default App;
