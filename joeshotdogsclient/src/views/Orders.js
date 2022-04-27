import React, {useState, useEffect} from 'react';
import {getAllOrders} from '../api/orderData';

export default function Orders(){
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      let isMounted = true;
      getAllOrders().then((ordersArray) => {
        if (isMounted) setOrders(ordersArray);
      });
      return () => {
        isMounted = false;
      };
    }, []);
   

    return (
      <div>
        {orders.map((order) => (
            <div class="card">
  <div class="card-header">
  <h4 class="card-title">Order Number: {order.id}</h4>
  <p class="card-text">Order Total: {order.total}</p>
    <p class="card-text">Date: {order.date}</p>
    <p class="card-text">Status: {order.status}</p>
    <p class="card-text">Delivery: {order.delivery}</p>
    <p class="card-text">Order Name: {order.nameOnCard}</p>
  </div>
  </div>
        ))}
        </div>
    );
}