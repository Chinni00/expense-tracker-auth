import React,{useState,useRef} from 'react'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordWarning,setPasswordWarning] = useState(false)
    
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef()

  

    const switchAuthMode = (event) => {
        event.preventDefault();
        setIsLogin((prevState) => !prevState);
      };
    
      const submitHandler=(event)=>{
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value 
        const enteredPassword = passwordInputRef.current.value
        const enteredConfirmPassword = confirmPasswordInputRef.current.value

        if(enteredPassword!==enteredConfirmPassword){
            setPasswordWarning(true)
            return ''
        }
         // 
         setPasswordWarning(false)
         setIsLoading(true);
          
         let url;

         if(isLogin){

         }else{
            url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDeEdrVt4u11fGigu620gWbNo_fW39vd7s'
         }
         fetch(url,{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            }),
            headers:{
                'Content-type':'application/json'
            }
         }).then(res=>{
            setIsLoading(false)
            if(res.ok){
                console.log('successfully created')
            }else{
                return res.json().then(data=>{
                    let errorMessage = 'Authentication faliure'
                    if(data && data.error && data.error.message){
                        errorMessage= data.error.message
                    }
                    alert(errorMessage)
                })
            }
         })

      }
  return (
    <div>
         <center className="">
     
      <h1 className="mt-5">{isLogin ? "Login" : "Sign Up"}</h1>
      <div className="card w-75 mt-5 p-5 shadow-1">
        <form onSubmit={submitHandler}>
          <div class="form-group">
            <label htmlFor="exampleInputEmail1 text-left">Email address</label>
            <input
              type="email"
             required
             ref={emailInputRef}
              className="form-control mt-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted mt-2">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group mt-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              required
              ref={passwordInputRef}
              className="form-control mt-2"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        { !isLogin && <div class="form-group mt-2">
            <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
            <input
              type="password"
              required
              ref={confirmPasswordInputRef}
              className="form-control mt-2"
              id="exampleInputConfirmPassword1"
              placeholder="Password"
            />
          </div>}
        {passwordWarning && <p className='text-danger'>Password and confirm password should be same</p>}
          <button type="submit" className="btn btn-primary mt-2 btn-md ">
            {isLogin ? "Login" : "Create account"}
            {isLoading && !isLogin ? "...." : ""}
            {isLoading && isLogin ? '...':''}
          </button>
          <br></br>
          <a href="#"
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={switchAuthMode}
          >
            {isLogin ? "Create a new account" : "Login with existing account"}
          </a>
        </form>
      </div>
    </center>
    </div>
  )
}

export default Login