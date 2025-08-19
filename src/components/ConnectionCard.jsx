import React from 'react'

const ConnectionCard = ({users}) => {
  return (
    <div className="card bg-base-300 w-80 shadow-sm my-2">
  <figure>
    <img className=' w-full h-72 rounded-md'
      src={users.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title my-1">{users.firstName + " " + users.lastName}</h2>
    <p>{users.about}</p>
    <p>Age : {users.age + " , " + "Gender : " +  users.gender}</p>
    <p>Skills : {users?.skills.join(", ") || "No Skills listed"}</p>
  </div>
</div>
  )
}

export default ConnectionCard