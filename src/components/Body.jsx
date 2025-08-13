import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Base_Url } from '../constants/constants'
import { addUser } from '../utils/userSlice'


const Body = () => {

const dispatch = useDispatch();
const navigate = useNavigate();

const fetchUser = async () => {
  try {
    const res = await axios.get(Base_Url + "profile/view", {
      withCredentials: true
    });

    // If server says user is not logged in, redirect
    if (res.status !== 200 || !res.data) {
      navigate("/login");
      return;
    }

    dispatch(addUser(res.data));
  } catch (err) {
    // Network error or 4xx/5xx response
    navigate("/login");
    console.log(err);
  }
};

useEffect(() => {
  fetchUser();
}, []);


  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Body