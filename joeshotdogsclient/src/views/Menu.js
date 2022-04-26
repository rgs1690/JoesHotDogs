import React, { useEffect, useState } from 'react';
import getAllHotDogs from '../api/hotDogData';
import HotDogCards from '../components/HotDogCards';

export default function Menu() {
    const [hotDogs, setHotDogs] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getAllHotDogs().then((setHotDogs) => {
            if (isMounted) setHotDogs(hotDogs);
        });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <h1>Look at these DOGS!</h1>
            <div>
                {hotDogs.map((hotDog) => (
                        <HotDogCards
                            key={hotDog.id}
                            hotDog={hotDog}
                            setHotDogs={setHotDogs}
                        />
                            ))
                }
            </div>
        </div>
    )
}