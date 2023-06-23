import React from 'react'
import { useRef } from 'react'

const UpdateProfile = () => {
    const usernameInputRef = useRef()
    const profileUrlInputRef = useRef();
    const formSubmitHandler=()=>{
   
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
        }).then(res=>res.json()).then(data=>console.log(data))

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
        
        
        <hr></hr>
        <center>
        <h2>Contact Details</h2>
        <div>
            
        <form className='w-75 card p-4'>
  <div class="form-group" onSubmit={formSubmitHandler}>
  <button className='btn position-absolute top-0 end-0 me-4 border solid border-dark mt-2' >X</button>
    <label for="exampleInputEmail1">Full Name:</label>
    <input type="" class="form-control mt-3" id="exampleInputEmail1" ref={usernameInputRef}  placeholder="Enter fullname" />
  </div>
  <div class="form-group">
    <label for="exampleInputphotourl">Profile Photo URL:</label>
    <input type="" class="form-control mt-3" id="exampleInputphotourl" ref={profileUrlInputRef} placeholder="profile photo url" />
  </div>

  <button type="submit" class="btn btn-primary mt-3">Update</button>
</form>
</div>
</center>
    </div>
  )
}

export default UpdateProfile