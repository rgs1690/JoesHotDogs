import React, { useEffect, useState } from 'react';
import getAllHotDogs from '../api/hotDogData';

export default function Menu() {
    const [allHotDogs, setAllHotDogs] = useState([]);

    useEffect(() => {
        let isMounted = true;
        getAllHotDogs().then((hotDogs) => {
            if (isMounted) setAllHotDogs(hotDogs);
        });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div>
            <h1>Look at these DOGS!</h1>
            <div>
                {hotDogs.length > 0 ? (
                    hotDogs.map((hotDog) => (
                        <HotDogCards
                            key={hotDog.id}
                            hotDog={hotDog}
                            setAllHotDogs={setAllHotDogs}
}
        </div>
    )
}