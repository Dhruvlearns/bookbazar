import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../Components/Nav.css";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };

    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div>
        <div className='Nav'>
            <input type="text" placeholder="Search for books"/>
            <button> Search</button>
            <NavLink to="/Home"> Home</NavLink>
            <NavLink to="/Sellyourbook"> Sellyourbook</NavLink>
            <NavLink to={"/Myaccount"}>My Account</NavLink> 
            <NavLink to="/Cart"> Cart</NavLink>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <NavLink to="/Login">Login</NavLink>
                <NavLink to="Signup"> Signup</NavLink>
              </>
            )}
        </div>  
    </div>
  )
}

export default Nav