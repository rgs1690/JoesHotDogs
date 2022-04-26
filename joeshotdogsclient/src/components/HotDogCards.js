import React from 'react';
import PropTypes from 'prop-types';

export default function HotDogCards({ hotDog }) {
    return
    (
        <>
            <div className="hotDogCard" style="width: 18rem;">
                <img src={hotDog.imageUrl} className="card-img-top" alt={hotDog.name}></img>
                    <div className="card-body">
                    <h5 className="card-title">{hotDog.name}</h5>
                    <p className="card-text">{hotDog.description}</p>
                        <a href="#" class="btn btn-primary">Add to Order?</a>
                    </div>
            </div>
        </>
    )
}

HotDogCards.propTypes = {
    hotDog: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
    })
};