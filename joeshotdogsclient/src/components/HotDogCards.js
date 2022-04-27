import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


export default function HotDogCards({ hotDog }) {
    const navigate = useNavigate();
    const handleInfo = () => {
        navigate(`/hotdogs/${hotDog.id}`)
    }
    return (
        <>
            <div className="hotDogCard" style={{ width: '18rem' }}>
                <img src={hotDog.imageurl} className="card-img-top" alt={hotDog.name}></img>
                    <div className="card-body">
                    <h5 className="card-title">{hotDog.name}</h5>
                    <p className="card-text">{hotDog.description}</p>
                    <button type="button" className="btn btn-info" onClick={handleInfo}> Info</button>
                        <a href="#" className="btn btn-primary">Add to Order?</a>
                    </div>
            </div>
        </>
    )
}

HotDogCards.propTypes = {
    hotDog: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
    })
};