import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouteProvider,
    Route,
} from "react-router-dom";
import Protected from './Components/Protected';
import Login from './Pages/Login';

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path='signup' element={<signup/>} />
            <Route path='Login' element={<Login/>} />
            <Route path='/' element={<Protected/>} />

        </Route>
    )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
        <App/>
   
 
);


