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
if (obj.id) {
    setFormInput({
        hotDogId: obj.hotDogId,
        orderId: obj.orderId,
    })
}

    getHotDogOrderByOrderId(id).then(setHotDogOrders);
  }, [obj]);

console.log(id)
console.log(hotDogOrders); 
  
    return (
        <>
    <div>
        <select style= {{ width: '18rem' }}>
        {hotDogs?.map((hotdog) => (
            <option key={hotdog.id}>{hotdog.name}</option>
        ))}
        </select>
        <button  type="button" className="btn btn-success">Add to Order</button>
</div>
    <div>
    <button  type="button" className="btn btn-success">Submit Order</button>
    </div>
    </>
    )
    
}
CartForm.propTypes = {
    obj: PropTypes.shape({}),
};
CartForm.defaultProps = { obj : {} };

// Total the hotdogs for order.total and display on screen
// Add Add new order button on menu that navigates to orderForm
// display hot dogs to html when added 
// add a submit order button that closes the order and hides the update and delete options and writes 
//closed on the order card. 
// get order buy orderId useParams as Id then get allHotDogOrdersby Order Id map over then to display
