import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getAllHotDogs } from "../api/hotDogData";
import "bootstrap/dist/css/bootstrap.min.css";
import { createHotDogOrder, getHotDogOrderByOrderId } from "../api/hotDogOrderData";
import { getSingleOrder } from "../api/orderData";

const initialState = {
  hotDogId: "",
  orderId: "",
};
export default function CartForm({ obj = {} }) {
  const [hotDogOrders, setHotDogOrders] = useState([]);
  const [newHDO, setHDO] = useState({});
  const [hotDogs, setHotDogs] = useState([]);
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleOrder(id).then((order) => setOrder(order));
    getAllHotDogs().then((hotDogs) => {
      setHotDogs(hotDogs);
    });
    getHotDogOrderByOrderId(id).then((hotDogOrders) => {
      setHotDogOrders(hotDogOrders);
    });
  }, []);

  const handleAddDog = () => {
    console.log(newHDO);
    createHotDogOrder(newHDO).then(setHotDogOrders);
  };

  const changeDog = (newDog) => {
    setHDO(newDog);
  }

  return (
    <>
      <div>
        <h2>Your Order # {order.id}</h2>
        {hotDogOrders?.map((hotdog) => (
          <p key={hotdog.Id}>{hotdog.hotDogName}</p>
        ))}
      </div>
      <div></div>
      <div>
        <select
        style={{ width: "18rem" }}
        onChange={(event) => changeDog(event.target.value)}
        value={newHDO}
        >
          {hotDogs?.map((hotdog) => (
            <option key={hotdog.id}>{hotdog.name}</option>
          ))}
        </select>
        <h2>Order Total:{order.total} </h2>
        <button type="button" className="btn btn-success" onClick={handleAddDog}>
          Add to Order
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-success">
          Submit Order
        </button>
      </div>
    </>
  );
}
CartForm.propTypes = {
  obj: PropTypes.shape({}),
};
CartForm.defaultProps = { obj: {} };

// Total the hotdogs for order.total and display on screen
// Add Add new order button on menu that navigates to orderForm
// display hot dogs to html when added
// add a submit order button that closes the order and hides the update and delete options and writes
//closed on the order card.
