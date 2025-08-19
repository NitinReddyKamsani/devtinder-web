import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_Url } from '../constants/constants'

const Requests = () => {

    const fetchRequests = async ()=> {
        try{
                const res = await axios.get(Base_Url + "user/request/received",{withCredentials : true });
                console.log(res);
        }
        catch(err){
            console.log(err);
        }
    }


    useEffect(()=>{
        fetchRequests();
    },[])

  return (
    <div>Requests</div>
  )
}

export default Requests