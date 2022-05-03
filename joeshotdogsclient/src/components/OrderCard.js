import React, { useState } from 'react';
import Proptypes from 'prop-types';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { deleteOrder, updateOrder } from '../api/orderData';

export default function OrderCard({order, setOrders}) {
    const [checked, setChecked] = useState();


    const handleClick = (method) => {
        if (method === 'delete') {
            deleteOrder(order).then(setOrders);
        }
    }
    return (
        <div>
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
                        <button type="button" onClick={() => handleClick('delete') }className="btn btn-danger">Delet Order</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}