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
import CartForm from '../components/CartForm';
import OrderForm from '../components/OrderForm';
import EditOrder from '../views/EditOrder';

export default function Routing(){
return (
    <div>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Cart" element={<Cart />}></Route>
        <Route exact path="/hotdogs/:key" element={<HotDogDetails/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Menu" element={<Menu/>}></Route>
        <Route exact path="/Orders" element={<Orders />}></Route>
        <Route exact path="/Payment" element={<Payment/>}></Route>
        <Route exact path="/ThankYou" element={<ThankYou/>}></Route>
        <Route exact path="/CartForm/:id" element={<CartForm/>} />
        <Route exact path="/OrderForm" element={<OrderForm/>} />
        <Route exact path="/editorder/:key" element={<EditOrder/>} />
        </Routes>

    </div>
)


}