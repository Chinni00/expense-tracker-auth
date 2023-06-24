import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [token,setToken] = useState(localStorage.getItem('token'))
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken('')
    navigate("/");
  };
  return (
    <div className="pt-2 w-100 bg-dark text-white d-flex justify-content-between align-content-center px-2" style={{height:'50px'}}>
           <a>Expense Tracker</a>
           <div className="w-25 d-flex justify-content-around align-content-center">
            <span style={{cursor:"pointer"}} onClick={()=>{navigate('/')}}>Home</span>
           {token && <span style={{cursor:"pointer"}} onClick={logoutHandler}>Logout</span>}
           </div>
    </div>
          
  );
};

export default Navbar;
