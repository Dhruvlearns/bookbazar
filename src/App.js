import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Myaccount from "./Pages/Myaccount";
import Sellyourbook from "./Pages/Sellyourbook";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PhotoData from "./PhotoData"; 
import Photo from "./Photo";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Book Bazar</h1>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Myaccount" element={<Myaccount />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Sellyourbook" element={<Sellyourbook />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
