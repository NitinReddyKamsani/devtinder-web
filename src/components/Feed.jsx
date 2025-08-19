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

  return (
    <div 
      className="flex flex-wrap justify-center gap-4 my-4 
                 max-h-[80vh] overflow-y-auto p-4"
    >
      {feed?.users?.length > 0 ? (
        feed.users.map((user, index) => (
          <UserCard key={user._id || index} users={user} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Feed;
