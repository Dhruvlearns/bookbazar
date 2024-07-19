import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Myaccount from "./Pages/Myaccount";
import Sellyourbook from "./Pages/Sellyourbook";
import Cart from "./Pages/Cart";

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

      </Routes>



    </div>

    </div>
  );
}

export default App;
