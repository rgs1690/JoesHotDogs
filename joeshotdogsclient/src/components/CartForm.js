import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllHotDogs } from '../api/hotDogData'
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
    hotDogId: '',
    orderId: '',
}
export default function CartForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const [hotDogOrders, setHotDogOrders] = useState();
  const [hotDogs, setHotDogs] = useState();
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    getAllHotDogs().then((hotDogs) => {
        setHotDogs(hotDogs);
    });
    if (obj.id) {

    }
  }, [obj]);


  
  
  
    return (
    <div>
        <select>
            {hotDogs.map((hotdog) =>(
                <option>{hotdog.name}</option>
            ) )}
        </select>
</div>
    )
    
}
CartForm.propTypes = {
    obj: PropTypes.shape({}),
};
CartForm.defaultProps = { obj : {} };