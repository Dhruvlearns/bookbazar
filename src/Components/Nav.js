import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Components/Nav.css";

const Nav = () => {
  return (
    <div>
        <div className='Nav'>
            <input type="text" placeholder="Search for books"/>
            <button> Search</button>
            <NavLink to="/Home"> Home</NavLink>
            <NavLink to="/Sellyourbook"> Sellyourbook</NavLink>
            <NavLink to={"/Myaccount"}>My Account</NavLink> 
            <NavLink to="/Cart"> Cart</NavLink>
            <NavLink to="/Login">Login</NavLink>
            <NavLink to="Signup"> Signup</NavLink>
        </div>  
    </div>
  )
}

export default Nav
