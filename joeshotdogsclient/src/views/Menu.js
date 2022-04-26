import React, { useEffect, useState } from 'react';
import getAllHotDogs from '../api/hotDogData';
import HotDogCards from '../components/HotDogCards';

export default function Menu() {
    const [hotDogs, setHotDogs] = useState([]);

    useEffect(() => {
        getAllHotDogs().then(setHotDogs);
    }, []);

    return (
        <>
            <div>
               <h1>Look at these DOGS! or not</h1>
                <div>
                    <>
                        {hotDogs.map((hotDog) => (
                            <HotDogCards
                                key={hotDog.id}
                                hotDog={hotDog}
                            />
                        ))}
                    </>
                </div>
           </div>
        </>
    );
}