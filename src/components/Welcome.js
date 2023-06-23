import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
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