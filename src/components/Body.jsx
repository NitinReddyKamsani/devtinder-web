import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Base_Url } from '../constants/constants'
import { addUser } from '../utils/userSlice'


const Body = () => {

const dispatch = useDispatch();

const fetchUser = async ()=>{
    try{
      const res = axios.get(Base_Url + "profile/view",{
        withCredentials : true
      });
      dispatch(addUser(res))
    }
    catch(err){
      console.log(err)
    }
}

useEffect(()=>{
  fetchUser();
},[])


  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Body