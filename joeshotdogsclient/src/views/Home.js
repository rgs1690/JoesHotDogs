import React, {useState, useEffect} from 'react';
import { getAllOrders } from '../api/orderData';
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
  
  <div className="card">
  
  <div className="card-body">
    <h5 className="card-title">{order.nameOnCard}</h5>
    <p className="card-text">{order.total}</p>
  
  </div>
  </div>
  
        ))}
  
  
        </div>
  
    );
}