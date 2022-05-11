import React from 'react';
import PropTypes from 'prop-types';



export default function HDOCard({ hdo }) {
    const handleDel = () => {
        console.log('delete hdo');
    }
    return (
        <>
            <div className="hdoCard" style= {{ width: '18rem' }}>
                    <div className="card-body">
                    <h5 className="card-title">{hdo.hotdogname}</h5>
                    <button type="button" className="btn btn-danger" onClick={handleDel}> Delete</button>
                    </div>
            </div>
        </>
    )
}

HDOCard.propTypes = {
    hdo: PropTypes.shape({
        id: PropTypes.number,
        hotdogname: PropTypes.string,
        orderid: PropTypes.string,
    })
};