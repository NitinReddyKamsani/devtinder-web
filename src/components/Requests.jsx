import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_Url } from '../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'
import RequestCard from './RequestCard'

const Requests = () => {
    const dispatch = useDispatch();
    const req = useSelector(store=> store.requests);


    const reviewRequests = async (status,_id)=> {
        try {
            const res = await axios.post(Base_Url + "request/review/" + status + "/" + _id ,{} , {withCredentials : true});
            console.log(res);
            dispatch(removeRequest(_id));
        }
        catch(err){
            alert(err);
        }
    }

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
       return( 
        <div>
            <h1 className='text-lg my-10 text-center'>Connection Requests</h1>
       <h1 className='text-lg my-10 text-center'>There are no requests !! You can see if someone send the requests</h1>
       </div>
       )
    }
    
  return (
    <>
    <h1 className='text-2xl my-5 text-center'>Connections Requests</h1>
    <div className='flex gap-3 mx-2 overflow-y-auto'>
        
    {req.map((request, index) => (
          <div key={request._id || index} className="flex">
            <RequestCard
              user={request.fromConnectionId} // full user info (includes skills)
              requestId = {request._id}
              reviewRequests={reviewRequests}
            />
          </div>
        ))}
    </div>
    </>
  )
}

export default Requests;