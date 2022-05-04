import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom'
import { deleteOrder} from '../api/orderData';

export default function OrderCard({order, setOrders}) {
    const navigate = useNavigate();
    const handleClick = (method) => {
        if (method === 'delete') {
            deleteOrder(order).then(setOrders);
        } else if (method === 'edit') {
            navigate(`/editOrder/${order.id}`)
        }
    }
    return (
        <>
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Order Number: {order.id}</h4>
                        <p className="card-text">Order Total: {order.total}</p>
                        <p className="card-text">Date: {order.date}</p>
                        <p className="card-text">Status: {order.status}</p>
                        <p className="card-text">Delivery: {order.delivery}</p>
                        <p className="card-text">Order Name: {order.nameOnCard}</p>
                        <div>
                        <button type="button" onClick={() => handleClick('edit')} className="btn btn-warning">Update Order</button>
                        <button type="button" onClick={() => handleClick('delete') } className="btn btn-danger">Delet Order</button>
                        </div>
                    </div>
                </div>
            
        </>
    );
}

OrderCard.propTypes = {
 order: PropTypes.shape(PropTypes.obj).isRequired,
 setOrders: PropTypes.func.isRequired,
};
