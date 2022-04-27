import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {  useParams, useNavigate } from "react-router-dom";
import { createOrder, updateOrder } from "../api/orderData";
import "bootstrap/js/src/collapse";

export default function OrderForm({ obj }) {
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
  const { key } = useParams();
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
      });
    } else {
      createOrder({
        ...formInput,
      }).then(() => {
        resetForm();

        navigate("/ThankYou");
      });
    }
  };
  return (
    <form>
      <div className="form-group">
        <label htmlFor="cardNum">Credit Card Number</label>

        <input
          type="text"
          class="form-control"
          id="cardNum"
          aria-describedby="card number"
          placeholder="xxxxxxxxxx"
        />
      </div>

      <div class="form-group">
        <label htmlFor="expiration">Expiration Date</label>

        <input
          type="text"
          class="form-control"
          id="expiration"
          placeholder="00/00"
        />
      </div>

      <div class="form-group">
        <label htmlFor="nameOnCard">Name</label>

        <input
          type="text"
          class="form-control"
          id="nameOnCard"
          placeholder="Enter Name"
        />
      </div>

      <div class="form-group">
        <label htmlFor="billingZip">Billing Zipcode</label>

        <input
          type="text"
          class="form-control"
          id="billingZip"
          placeholder="Enter Zip Code"
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>

        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Enter Address"
        />
      </div>

      <div class="form-group">
        <label htmlFor="phone">Phone Number</label>

        <input
          type="text"
          class="form-control"
          id="phone"
          placeholder="0000000000"
        />
      </div>

      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="delivery" />

        <label className="form-check-label" htmlFor="exampleCheck1">
          Delivery?
        </label>
      </div>

      <div className="form-check">
        <input type="checkbox" class="form-check-input" id="pickup" />

        <label class="form-check-label" htmlFor="exampleCheck1">
          Pickup?
        </label>
      </div>

      <button type="submit" class="btn btn-primary">
        Add Food!
      </button>
    </form>
  );
}
