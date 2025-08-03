import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
    <h1>Welcome to Bookbazar  , one stop destination to sell and buy books</h1>
    <h2>{user && user.email}</h2>
    <button onClick={handleLogout}>Logout</button>
  </div>
  )
}

export default Welcome