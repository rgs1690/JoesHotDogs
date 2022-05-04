import React, {useState, useEffect} from 'react';
import {getAllOrders} from '../api/orderData';
import { useNavigate } from 'react-router-dom';

export default function Orders(){
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

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
          <div className="card" key={order.id}>
            <div className="card-header">
              <h4 className="card-title">Order Number: {order.id}</h4>
              <p className="card-text">Order Total: {order.total}</p>
              <p className="card-text">Date: {order.date}</p>
              <p className="card-text">Status: {order.status}</p>
              <p className="card-text">Delivery: {order.delivery}</p>
              <p className="card-text">Order Name: {order.nameOnCard}</p>
                    <div>
                        <button type="button" onClick={() => navigate(`/editOrder/${order.id}`)} className="btn btn-warning">Update Order</button>
                        <button type="button" className="btn btn-danger">Delete Order</button>
                </div>
           </div>
         </div>
        ))}
        </div>
    );
}