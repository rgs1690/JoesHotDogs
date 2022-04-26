import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

 
 export default function OrderForm() {
   return (
       <form>
    <div class="form-group">

    <label for="cardNum">Credit Card Number</label>

    <input type="text" class="form-control" id="cardNum" aria-describedby="card number" placeholder="xxxxxxxxxx"/>

  </div>

  <div class="form-group">

    <label for="expiration">Expiration Date</label>

    <input type="text" class="form-control" id="expiration" placeholder="00/00"/>

  </div>

<div class="form-group">

    <label for="nameOnCard">Name</label>

    <input type="text" class="form-control" id="nameOnCard" placeholder="Enter Name"/>

  </div>

<div class="form-group">

    <label for="billingZip">Billing Zipcode</label>

    <input type="text" class="form-control" id="billingZip" placeholder="Enter Zip Code"/>

  </div>

<div class="form-group">

    <label for="address">Address</label>

    <input type="text" class="form-control" id="address" placeholder="Enter Address"/>

  </div>

<div class="form-group">

    <label for="phone">Phone Number</label>

    <input type="text" class="form-control" id="phone" placeholder="0000000000"/>

  </div>

  <div class="form-check">

    <input type="checkbox" class="form-check-input" id="delivery"/>

    <label class="form-check-label" for="exampleCheck1">Delivery?</label>

  </div>

<div class="form-check">

    <input type="checkbox" class="form-check-input" id="pickup"/>

    <label class="form-check-label" for="exampleCheck1">Pickup?</label>

  </div>

  <button type="submit" class="btn btn-primary">Add Food!</button>

</form>
   )
 }
 

