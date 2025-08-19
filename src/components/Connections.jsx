import axios from 'axios'
import React, { useEffect } from 'react'
import { Base_Url } from '../constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'

import ConnectionCard from './ConnectionCard'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector(store=>store.connections);
    const fetchConnections = async ()=>{
        try{
            const res = await axios.get(Base_Url + "user/connections",{withCredentials : true});
            console.log(res?.data?.otherUsers);
            dispatch(addConnection(res?.data?.otherUsers));
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchConnections();
    },[])

    if(!connections) return;
    if(connections.length === 0) return <div>No Connections found</div>

  return (
    <>
    <h1 className='text-2xl my-5 text-center'>Connections</h1>
    <div className='flex gap-3 mx-2 overflow-y-auto'>
        
        {
            connections.map((connect,index)=> <div key={index} className='flex'><ConnectionCard users={connect}/></div>)
        }
    </div>
    </>
  )
}

export default Connections