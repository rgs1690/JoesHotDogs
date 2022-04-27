import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { createOrder, updateOrder } from "../api/orderData";
import "bootstrap/js/src/collapse";

export default function OrderForm({ obj = {} }) {
  const initialState = {
    cardNum: "",
    expiration: "",
    nameOnCard: "",
    billingZip: "",
    address: "",
    phone: "",
    date: "",
    status: true,
    delivery: false,
    userId: "",
    total: "",
  };


  const [formInput, setFormInput] = useState(initialState);
 
    const navigate = useNavigate();

  useEffect(() => {
    if (obj.id) {
      setFormInput({
        id: obj.id,
        cardNum: obj.cardNum,
        expiration: obj.expiration,
        nameOnCard: obj.nameOnCard,
        billingZip: obj.billingZip,
        address: obj.address,
        phone: obj.phone,
        date: obj.date,
        status: obj.status,
        delivery: obj.delivery,
        userId: obj.userId,
        total: obj.total,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,

      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (obj.id) {
        updateOrder(formInput).then(() => {
            navigate("/Orders");
      })
    } else {
      createOrder({
        ...formInput,
        date: new Date(),
      }).then((id) => {
        resetForm();

        navigate(`/Cart/${id}`);
      });
    }
  };
  return (
    <form onSubmit={handleClick}>
      <div className="form-group">
        <label htmlFor="cardNum">Credit Card Number</label>

        <input
          type="text"
          className="form-control"
          value={formInput.cardNum || ''}
          aria-describedby="card number"
          placeholder="xxxxxxxxxx"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="expiration">Expiration Date</label>

        <input
          type="text"
          className="form-control"
          value={formInput.expiratiom || ''}
          placeholder="00/00"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="nameOnCard">Name</label>

        <input
          type="text"
          className="form-control"
          value={formInput.nameOnCard || ''}
          placeholder="Enter Name"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="billingZip">Billing Zipcode</label>

        <input
          type="text"
          className="form-control"
          value={formInput.billingZip || ''}
          placeholder="Enter Zip Code"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>

        <input
          type="text"
          className="form-control"
          value={formInput.address || ''}
          placeholder="Enter Address"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>

        <input
          type="text"
          className="form-control"
          value={formInput.phone || ''}
          placeholder="0000000000"
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            value={formInput.delivery === true || ''}
            onChange={(e) => handleChange(e)}
            />

        <label className="form-check-label" htmlFor="exampleCheck1">
          Delivery?
        </label>
      </div>

      <div className="form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            value={formInput.delivery === false || ''}
            onChange={(e) => handleChange(e)}
            />

        <label className="form-check-label" htmlFor="exampleCheck1">
          Pickup?
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Food!
      </button>
    </form>
  );
}

OrderForm.propTypes = {
    obj: PropTypes.shape({}),
}
OrderForm.defaultProps = { obj: {} }