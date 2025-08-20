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
    if (feed?.users?.length > 0) return;
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

  // Don’t access feed.users[0] before it exists
  if (!feed?.users) {
    return <div className="text-center my-10">Loading...</div>;
  }

  if(feed.users.length === 0){
    return <div className="text-center my-10">There are no profiles right now</div>
  }
  return (
    <div className='flex justify-center my-10'>
      <UserCard users={feed.users[0]} />
    </div> 
  );
};

export default Feed;
