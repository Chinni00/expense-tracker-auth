import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'



const UpdateProfile = () => {
    const navigate=useNavigate();
    const usernameInputRef = useRef()
    const profileUrlInputRef = useRef();
    const token= localStorage.getItem('token')



    const btnHandler=()=>{
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDeEdrVt4u11fGigu620gWbNo_fW39vd7s',{
          method:'POST',
          body:JSON.stringify({
            idToken:token
          }),
          headers:{
            'Content-Type':'application/json'
          }
        }).then(res=>res.json()).then(data=>console.log(data))
      }

    const formSubmitHandler=(event)=>{
     event.preventDefault();
        const enteredUsername = usernameInputRef.current.value 
        const enteredProfileUrl = profileUrlInputRef.current.value
        const token = localStorage.getItem('token')
       
        
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDeEdrVt4u11fGigu620gWbNo_fW39vd7s',{
            method:'POST',
            body:JSON.stringify({
             idToken:token,
             displayName:enteredUsername,
             photoUrl:enteredProfileUrl,
             deleteAttribute:['DISPLAY_NAME','PHOTO_URL'],
             returnSecureToken:true,
            }),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json()).then(data=>console.log('data',data))
        

    }
  return (
    <div>
        <header className='d-flex justify-content-between'>
            <div className='mt-3 p-1'><i>Winners never quit, Quitters never win</i></div>
            <div className='w-25 p-1 bg-secondary-subtle rounded rounded-1'>
                <i>
                your profile is <b>64%</b> completed. A Complete profile has higher chances of landing a job.<a href='#'>Complete now</a>
                </i>
                </div>
        </header>
        
        <button onClick={btnHandler}>Get Info</button>
        <hr></hr>
        <center>
        <h2>Contact Details</h2>
        <div>
            
        <form className='w-75 card p-4' onSubmit={formSubmitHandler}>
  <div className="form-group" >
  <button className='btn position-absolute top-0 end-0 me-4 border solid border-dark mt-2' >X</button>
    <label htmlFor="exampleInputEmail1">Full Name:</label>
    <input type="" className="form-control mt-3" id="exampleInputEmail1" ref={usernameInputRef}  placeholder="Enter fullname" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputphotourl">Profile Photo URL:</label>
    <input type="" className="form-control mt-3" id="exampleInputphotourl" ref={profileUrlInputRef} placeholder="profile photo url" />
  </div>

  <button type="submit" className="btn btn-primary mt-3">Update</button>
</form>
</div>
</center>
    </div>
  )
}

export default UpdateProfile