import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_Url } from '../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSlice'
import ConnectionCard from './ConnectionCard'
import RequestCard from './RequestCard'

const Requests = () => {
    const dispatch = useDispatch();
    const req = useSelector(store=> store.requests);

    const fetchRequests = async ()=> {
        try{
                const res = await axios.get(Base_Url + "user/request/received",{withCredentials : true })
                dispatch(addRequests(res?.data?.user));
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(()=>{
        fetchRequests();
    },[])


    if(!req) return ;
    if(req.length === 0){
        <div className='text-lg my-10'>There are no requests !! Connect with someone from the feed</div>
    }
    
  return (
    <>
    <h1 className='text-2xl my-5 text-center'>Connections Requests</h1>
    <div className='flex gap-3 mx-2 overflow-y-auto'>
        
    {req.map((request, index) => (
          <div key={request._id || index} className="flex">
            <RequestCard
              user={request.fromConnectionId} // full user info (includes skills)
              status={request.status} // request metadata
            />
          </div>
        ))}
    </div>
    </>
  )
}

export default Requests