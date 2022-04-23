import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Cart from '../views/Cart';
import HotDogDetails from '../views/HotDogDetails';
import Login from '../views/Login';
import Menu from '../views/Menu';
import Orders from '../views/Orders';
import Payment from '../views/Payment';
import ThankYou from '../views/ThankYou';


export default function Routing(){
return (
    <div>
        <Routes>
        <Route exact path="/" element={<Cart />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route exact path="/HotDogDetails" element={<HotDogDetails/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Menu" element={<Menu/>}></Route>
        <Route exact path="/Orders" element={<Orders/>}></Route>
        <Route exact path="/Payment" element={<Payment/>}></Route>
        <Route exact path="/ThankYou" element={<ThankYou/>}></Route>
        </Routes>

    </div>
)


}