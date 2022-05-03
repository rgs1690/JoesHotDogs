import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../api/orderData';
import { useParams } from 'react-router-dom';
import OrderCard from '../components/OrderCard';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const { key } = useParams();

    useEffect(() => {
        getAllOrders().then((array) => {
            setOrders(array);
    });
}, []);

    return (
       <>
            <div>
                <h1>All Orders </h1>
                    <div>
                        {orders.map((order) => (
                            <OrderCard
                                key={order.id}
                                order={order}
                            />
                        ))}
                    </div>
           </div>
       </>
           );
}
