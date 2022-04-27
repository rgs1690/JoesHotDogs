import React, { useEffect, useState } from 'react';
import { getHotDogById } from '../api/hotDogData';
import { useParams } from 'react-router-dom';
import HotDogDetailsCard from '../components/DetailsCard';

export default function HotDogDetails(){
    const [singleHotDog, setSingleHotDog] = useState({});
    const { key } = useParams();

    useEffect(() => {
        getHotDogById(key).then(setSingleHotDog)
    }, []);

    return (
        <div>
            <HotDogDetailsCard hotdog={singleHotDog} />
        </div>
    )
}