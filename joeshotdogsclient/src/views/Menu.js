import React, { useEffect, useState } from 'react';
import { getAllHotDogs } from '../api/hotDogData';
import {useNavigate } from "react-router-dom";
import HotDogCards from '../components/HotDogCards';

export default function Menu() {
    const [hotDogs, setHotDogs] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        getAllHotDogs().then((array) => {
            setHotDogs(array);
        });
    }, []);
    const goToForm = () => {
        navigate(`/orderForm`)
    }
    return (
        <>
            <div>
                <button type="button" className="primary" onClick={goToForm}>GET SOME DOGS!</button>
               <h1>Look at these DOGS!</h1>
                <div>
                    {hotDogs.map((hotDog) => (
                        <HotDogCards
                            key={hotDog.id}
                            hotDog={hotDog}
                        />
                    ))}
                </div>
           </div>
        </>
    );
}