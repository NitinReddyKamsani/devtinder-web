import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Base_Url } from '../constants/constants';
import { addFeed } from '../utils/feedSlice';
import axios from 'axios';
import UserCard from './UserCard';


const Feed = () => {
  const feed = useSelector(store => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if(feed) return;
    try {
      const res = await axios.get(Base_Url + "feed", { withCredentials: true });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };
  

  useEffect(() => {
    getFeed();
  }, []);


  return (
    <div className='flex justify-center my-4'>
      {feed?.users ? <UserCard users={feed.users[0]} /> : <p>Loading...</p>}
    </div>
  );
  
};

export default Feed;