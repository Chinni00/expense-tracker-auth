import React, { useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom'

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
  const emailVerificationHandler = ()=>{
          fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDeEdrVt4u11fGigu620gWbNo_fW39vd7s',{
            method:'POST',
            body:JSON.stringify({
              requestType:"VERIFY_EMAIL",
              idToken:token,
            }),
            headers:{
              'Content-Type':'application/json'
            }
          }).then(res=>res.json()).then(data=>console.log(data))
  }
  return (
    <div>
        <center>
            <h1>Welcome to expense tracker</h1>
            <span><i>Your Profile is Incompleted <a href='#' onClick={switchToUpdatePage} >Complete Now</a></i></span><br />
          You have to verify your email to maintain ur account long   <button onClick={emailVerificationHandler} className='btn  btn-secondary'>Verify Email</button>
        </center>
       
    </div>
  )
}

export default Welcome