import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Pages/Myaccount.css"; // Ensure this path is correct

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-account">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        My Account
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/profile" className="dropdown-item">My Profile</Link>
          <Link to="/my-ads" className="dropdown-item">My Ads</Link>
          <Link to="/my-orders" className="dropdown-item">My Orders</Link>
          <Link to="/my-sold-orders" className="dropdown-item">My Sold Orders</Link>
          <Link to="/wishlist" className="dropdown-item">Wishlist</Link>
          <Link to="/how-it-works" className="dropdown-item">How It Works</Link>
          <Link to="/Sellyourbook" className="dropdown-item">Sell your book</Link>
          <Link to="/logout" className="dropdown-item">Logout</Link>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
