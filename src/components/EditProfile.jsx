import React, { useState } from 'react'
import UserCard from './UserCard'
import { Base_Url } from '../constants/constants'
import axios from 'axios'

const EditProfile = ({ user }) => {
    const[firstName, setFirstName] = useState(user?.data?.firstName)
    const[lastName,setLastName] = useState(user?.data?.lastName)
    const[age,SetAge] = useState(user?.data?.age);
    const[gender,SetGender] = useState(user?.data?.gender);
    const[about,SetAbout] = useState(user?.data?.about);
    const[skills,SetSkills] = useState(user?.data?.skills);
    const[photo,SetPhoto] = useState(user?.data?.photo);

    const handleUpdate = async () =>{
        try {
          const res = await axios.patch(Base_Url + "profile/update",{
                firstName,
                lastName,
                age,
                gender,
                about,
                skills,
                photo
            },
            {
                withCredentials : true
            })
            alert(res.data);

        }
        catch(err){
            alert("Update Failed Please Try Again Later")
        }
    }

  return (
    <div className='flex justify-center gap-4'>
    <div className='flex justify-center my-2'>
    <div className="card bg-base-300 w-96 shadow-sm">
    <div className="card-body max-h-[600px] overflow-y-auto">
      <h2 className="card-title justify-center">Edit Profile</h2>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">First Name</legend>
      <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="input" placeholder="Type here" />
      <legend className="fieldset-legend">Last Name</legend>
      <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className='input' placeholder='Type here' />
      </fieldset>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">Age</legend>
      <input type="text" value={age} onChange={(e)=>SetAge(e.target.value)} className="input" placeholder="Type here" />
      <legend className="fieldset-legend">Gender</legend>
      <input type="text" value={gender} onChange={(e)=>SetGender(e.target.value)} className='input' placeholder='Type here' />
      </fieldset>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">About</legend>
      <input type="text" value={about} onChange={(e)=>SetAbout(e.target.value)} className="input" placeholder="Type here" />
      <legend className="fieldset-legend">Skills</legend>
      <input type="text" value={skills.join(", ")} onChange={(e)=>SetSkills(e.target.value.split(", "))} className='input' placeholder='Type here' />
      </fieldset>
      <fieldset className="fieldset">
      <legend className="fieldset-legend">Photo</legend>
      <input type="text" value={photo} onChange={(e)=>SetPhoto(e.target.value)} className="input" placeholder="Type here" />
      </fieldset>
      <div className="card-actions justify-center my-2">
        <button onClick={handleUpdate}  className="btn btn-primary items-center" >Update</button>
      </div>
    </div>
  </div>
  </div>
    <UserCard users={{firstName,lastName,age,gender,about,skills,photo}} />
  </div>
  )
}

export default EditProfile