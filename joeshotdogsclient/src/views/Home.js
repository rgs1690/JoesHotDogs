import React, {useState, useEffect} from 'react';
import getAllOrders from '../api/orderData';
export default function Home(){
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
  
  <div class="card-body">
    <h5 class="card-title">{order.nameOnCard}</h5>
    <p class="card-text">{order.Total}</p>
  
  </div>
  </div>
  
        ))}
  
  
        </div>
  
    );
}