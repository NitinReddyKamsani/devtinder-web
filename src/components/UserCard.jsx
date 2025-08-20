import axios from 'axios';
import React from 'react'
import { Base_Url } from '../constants/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({users}) => {
  const dispatch = useDispatch();
//console.log(users._id);
  const handleSendRequest = async (status,userId)=>{
    try{
          const res = await axios.post(Base_Url + "request/send/" + status + "/" + userId,{},{withCredentials: true});
          dispatch(removeUserFromFeed(userId));
    }
    catch(err){
      alert(err);
    }
  }

  return (
    <div className="card bg-base-300 w-80 shadow-sm my-2">
  <figure>
  <img className=' w-full h-72 rounded-md'
  src={users.photo || "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/fd35c-no-user-image-icon-27.png?fit=500%2C500&ssl=1"}
  alt="user"
  onError={(e) => e.target.src = "https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/fd35c-no-user-image-icon-27.png?fit=500%2C500&ssl=1"}
/>

  </figure>
  <div className="card-body">
    <h2 className="card-title my-1">{users.firstName + " " + users.lastName}</h2>
    <p>{users.about}</p>
    <p>Age : {users.age + " , " + "Gender : " +  users.gender}</p>
    <p>Skills : {users.skills.join(", ")}</p>
    <div className="card-actions justify-center gap-8">
      <button className="btn btn-primary" onClick={()=>handleSendRequest("ignored",users._id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>handleSendRequest("interested",users._id)}>Interested</button>
    </div>
  </div>
</div>
  )
}

export default UserCard