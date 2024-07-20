import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Myaccount from "./Pages/Myaccount";
import Sellyourbook from "./Pages/Sellyourbook";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
    <div className="App">
    <h1> Book Bazar</h1>
    <div>
      
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Myaccount" element={<Myaccount />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Sellyourbook" element={<Sellyourbook/>} />
        <Route path="Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>

      </Routes>



    </div>

    </div>
  );
}

export default App;
