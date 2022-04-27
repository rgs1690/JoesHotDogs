import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllHotDogs } from '../api/hotDogData'
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
    hotDogId: '',
    orderId: '',
}
export default function CartForm({ obj = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const [hotDogs, setHotDogs] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAllHotDogs().then((hotDogs) => {
        setHotDogs(hotDogs);
    })  
 
  }, []);


  
  
  
    return (
    <div>
  
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ADD SOME HOT DOGS!
  </button>
    {hotDogs?.map((hotdog) => (
        
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <button button className="dropdown-item" key={hotdog.id} >{hotdog.name}</button>
    
  </div>
  
))}
</div>
</div>
    )
    
}
