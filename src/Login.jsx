import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center my-10'>
    <div className="card bg-base-300 w-96 shadow-sm">
    <div className="card-body">
      <h2 className="card-title justify-center">Login</h2>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">What is your email?</legend>
      <input type="text" className="input" placeholder="Type here" />
      <legend className="fieldset-legend">What is your password?</legend>
      <input type="password" className='input' placeholder='Type here' />
      </fieldset>
      <div className="card-actions justify-center my-2">
        <button className="btn btn-primary items-center">Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login