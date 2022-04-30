import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getAllHotDogs } from '../api/hotDogData'
import "bootstrap/dist/css/bootstrap.min.css";
import getHotDogOrderByOrderId from '../api/hotDogOrderData';

const initialState = {
    hotDogId: '',
    orderId: '',
}
export default function CartForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const [hotDogOrders, setHotDogOrders] = useState();
  const [hotDogs, setHotDogs] = useState();
  const { id } = useParams();


  useEffect(() => {
    getAllHotDogs().then((hotDogs) => {
        setHotDogs(hotDogs);
    });
    getHotDogOrderByOrderId(id).then(setHotDogOrders);
  }, [id]);

console.log(id)
  
  
    return (
    <div>
        <select>
        
        </select>
</div>
    )
    
}
CartForm.propTypes = {
    obj: PropTypes.shape({}),
};
CartForm.defaultProps = { obj : {} };