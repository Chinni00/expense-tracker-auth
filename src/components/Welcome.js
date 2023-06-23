import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const token = localStorage.getItem('token');


  // useEffect(()=>{
  //   fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDeEdrVt4u11fGigu620gWbNo_fW39vd7s',{
  //     method:'POST',
  //     body:JSON.stringify({
  //       idToken:token
  //     }),
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   }).then(res=>res.json()).then(data=>console.log(data))
  // },[])

  const navigate= useNavigate()

  const switchToUpdatePage=()=>{
     navigate('/update-profile')
  }
  return (
    <div>
        <center>
            <h1>Welcome to expense tracker</h1>
            <span><i>Your Profile is Incompleted <a href='#' onClick={switchToUpdatePage} >Complete Now</a></i></span>
        </center>
       
    </div>
  )
}

export default Welcome