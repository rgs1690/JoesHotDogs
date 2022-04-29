import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { createOrder, updateOrder } from "../api/orderData";
import "bootstrap/js/src/collapse";

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
export default function OrderForm({ obj = {} }) {
  const [checked, setChecked] = useState();
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
const handleCheck = () => {
    setChecked(!checked);
    if (checked) {
        obj.delivery = true;
    }
}
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
        userId: 1,
        total:1
      }).then((id) => {
          console.log(id)
        resetForm();
        navigate(`/CartForm/${id}`);
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
          name="cardNum"
        />
      </div>

      <div className="form-group">
        <label htmlFor="expiration">Expiration Date</label>

        <input
          type="text"
          className="form-control"
          value={formInput.expiration || ''}
          placeholder="00/00"
          onChange={(e) => handleChange(e)}
          name="expiration"
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
          name="nameOnCard"
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
          name="billingZip"
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
          name="address"
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
          name="phone"
        />
      </div>

      <div className="form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            checked={obj.delivery ? 'checked': ''}
            onChange={() => handleCheck()}
            name="delivery"
            />

        <label className="form-check-label" htmlFor="exampleCheck1">
          Delivery?
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        {obj.id ? 'Update Food' : "Add Food!"}
      </button>
    </form>
  );
}

OrderForm.propTypes = {
    obj: PropTypes.shape({}),
}
OrderForm.defaultProps = { obj: {} }