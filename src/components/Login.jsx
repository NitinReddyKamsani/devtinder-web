import axios from 'axios';
import React, { useState } from 'react'
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch()
  const[email,setEmail] = useState('Manjula@yahoo.com')
  const[password,setPassword] = useState('Manjula@123')
  const navigate = useNavigate();
  const [hasError,sethasError] = useState(false);
  const [error,setError] = useState(null);

  const handleBtn = async () => {
    try {
      const res = await axios.post("http://localhost:7777/login",{
          email,
          password
      },
      {withCredentials : true}
  )
    dispatch(addUser(res))
    navigate('/');
     
    } catch (err) {
      sethasError(true);
      setError(err.response?.data?.message  || "Invalid Email or Password");
      console.log(err);
    }
  };

  return (
    <div className='flex justify-center my-10'>
    <div className="card bg-base-300 w-96 shadow-sm">
    <div className="card-body">
      <h2 className="card-title justify-center">Login</h2>
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
        <button className="btn btn-primary items-center" onClick={handleBtn}>Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login