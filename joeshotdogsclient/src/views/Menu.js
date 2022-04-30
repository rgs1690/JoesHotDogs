import React, { useEffect, useState } from 'react';
import { getAllHotDogs } from '../api/hotDogData';
import HotDogCards from '../components/HotDogCards';

export default function Menu() {
    const [hotDogs, setHotDogs] = useState([]);

    useEffect(() => {
        getAllHotDogs().then((array) => {
            setHotDogs(array);
        });
    }, []);

    return (
        <>
            <div>
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