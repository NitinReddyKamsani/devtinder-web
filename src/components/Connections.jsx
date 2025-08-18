import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_Url } from '../constants/constants'

const Connections = () => {

    const fetchConnections = async ()=>{
        try{
            const res = await axios.get(Base_Url + "user/connections",{withCredentials : true});
            console.log(res?.data?.otherUsers);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchConnections();
    },[])

  return (
    <div>Connections</div>
  )
}

export default Connections