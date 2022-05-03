////import React, { useEffect, useState } from 'react';
////import { getHotDogById } from '../api/hotDogData';
////import { useParams } from 'react-router-dom';
////import HotDogDetailsCard from '../components/DetailsCard';

////export default function HotDogDetails() {
////    const [singleHotDog, setSingleHotDog] = useState({});
////    const { key } = useParams();

////    useEffect(() => {
////        getHotDogById(key).then(setSingleHotDog)
////    }, []);

////    return (
////        <div>
////            <HotDogDetailsCard hotdog={singleHotDog} />
////        </div>
////    )
////}

import React, { useState, useEffect } from 'react';
import { getAllOrders } from '../api/orderData';

export default function Orders() {
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
                    <div className="card-header">
                        <h4 className="card-title">Order Number: {order.id}</h4>
                        <p className="card-text">Order Total: {order.total}</p>
                        <p className="card-text">Date: {order.date}</p>
                        <p className="card-text">Status: {order.status}</p>
                        <p className="card-text">Delivery: {order.delivery}</p>
                        <p className="card-text">Order Name: {order.nameOnCard}</p>
                        <div>
                            <button type="button" className="btn btn-warning">Update Order</button>
                            <button type="button" className="btn btn-danger">Delet Order</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}