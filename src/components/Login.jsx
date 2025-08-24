import axios from 'axios';
import React, { useState } from 'react'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Base_Url } from '../constants/constants'

const Login = () => {
  const dispatch = useDispatch()
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
  const[isLogin,setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [hasError,sethasError] = useState(false);
  const [error,setError] = useState(null);

  const handleBtn = async () => {
    try {
      const res = await axios.post(
        Base_Url + "login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
    
      dispatch(addUser(res));
      navigate('/');
    } catch (err) {
      sethasError(true);
      setError(err.response?.data?.message  || "Invalid Email or Password");
      console.log(err);
    }
  };

  const handleSignUp = async()=>{

    try {
          const res = await axios.post(Base_Url+ "signup",{firstName,lastName,email,password},
          {withCredentials : true})

          dispatch(addUser(res.data));
          navigate("/profile");
    }
    catch(err){
        alert(err.message);
    }

  }

  return (
    <div className='flex justify-center my-10'>
    <div className="card bg-base-300 w-96 shadow-sm">
    <div className="card-body">
      <h2 className="card-title justify-center">{isLogin ? "Login" : "Sign Up"}</h2>
    { !isLogin &&
      <fieldset className="fieldset">
      <legend className="fieldset-legend">What is your First Name ?</legend>
      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="input" placeholder="Type here" />
      <legend className="fieldset-legend">What is your Last Name ?</legend>
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className='input' placeholder='Type here' />
      </fieldset>
    }
      <fieldset className="fieldset">
      <legend className="fieldset-legend">What is your email?</legend>
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="input" placeholder="Type here" />
      <legend className="fieldset-legend">What is your password?</legend>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Type here' />
      </fieldset>
      { hasError &&
      <p className='text-red-500 text-center'>Error : {error}</p> 
      }
      <div className="card-actions justify-center my-2">
        <button className="btn btn-primary items-center" onClick={isLogin ? handleBtn : handleSignUp}>{isLogin ? "Login" : "Sign Up"}</button>
      </div>
      <p className='text-center underline cursor-pointer' onClick={()=>setIsLogin((value)=> !value)}>{isLogin ? "New User ? Sign Up Here" : "Existing User ? Login Here"}</p> 
    </div>
  </div>
  </div>
  )
}

export default Login