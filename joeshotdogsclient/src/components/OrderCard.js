import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteOrder, updateOrder } from '../api/orderData';

export default function OrderCard() {
    const [checked, setChecked] = useState();
    const [orders, setOrders] = useState([])


    const handleChange = () => {
        setChecked(!checked);
        const delivery = {

        }
    }
}