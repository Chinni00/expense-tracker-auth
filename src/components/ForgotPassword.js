import React from 'react'
import { useRef } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate=useNavigate()
    const emailInputRef =useRef()

    const passwordResetHandler=(event)=>{
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDeEdrVt4u11fGigu620gWbNo_fW39vd7s',{
            method:'POST',
            body:JSON.stringify({
                requestType:'PASSWORD_RESET',
                email:enteredEmail
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>{
            if(res.ok){
                alert('link sent to mail successfully')
                navigate('/')
                
            }else{
                return res.json()
            }
        }).then(data=>{
            if(data && data.error && data.error.message){
                alert(data.error.message)
            }
        })

    }

  return (
    <center className=' '>
        <Navbar />
        <p>This form will sent you a link that you can change your password</p>
    <form className=' w-75 card p-5' onSubmit={passwordResetHandler}>
  <div className="form-group ">
    <label for="exampleInputEmail1 ">Email address</label>
    <input type="email" ref={emailInputRef} className="form-control m-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted m-2">We'll never share your email with anyone else.</small>
  </div>
 
  <button type="submit" className="btn btn-primary" >Send Link</button>
</form>
</center>
  )
}

export default ForgotPassword