import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Base_Url } from '../constants/constants';
import { removeUSer } from '../utils/userSlice';
import axios from 'axios';

const NavBar = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(Base_Url + "logout", {}, { withCredentials: true });
      dispatch(removeUSer());
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar bg-base-300 px-4">
      {/* Left side - Brand */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">devTinder</Link>
      </div>

      {/* Right side */}
      {user?.data?.firstName && (
        <div className="navbar-end flex items-center gap-2">
          {/* Hide Welcome text on very small screens */}
          <p className="hidden sm:block my-2">
            Welcome, {user?.data?.firstName}
          </p>

          {/* Avatar dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user avatar"
                  src={user?.data?.photo}
                />
              </div>
            </div>

            {/* Dropdown menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between" onClick={() => navigate("/profile")}>
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link to="/connections">Connections</Link></li>
              <li><Link to="/requests">Requests</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
