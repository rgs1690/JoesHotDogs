import React from 'react';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteHotDogOrder } from '../api/hotDogOrderData';

export default function HDOCard({ hdo, sethdos }) {
    const handleDel = () => {
        deleteHotDogOrder(hdo.id, hdo.orderId).then(sethdos);
    }
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{hdo.hotDogName}</h5>
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
    }),
    sethdos: PropTypes.func.isRequired,
};

HDOCard.defaultProps = {
    hdo: {},
}