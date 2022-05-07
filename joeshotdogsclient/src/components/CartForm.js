import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getAllHotDogs } from "../api/hotDogData";
import "bootstrap/dist/css/bootstrap.min.css";
import getHotDogOrderByOrderId from "../api/hotDogOrderData";
import { getSingleOrder } from "../api/orderData";

const initialState = {
  hotDogId: "",
  orderId: "",
};
export default function CartForm({ obj = {} }) {
  const [hotDogOrders, setHotDogOrders] = useState([]);
  const [hotDogs, setHotDogs] = useState([]);
  const [order, setOrder] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getSingleOrder(id).then((order) => setOrder(order));
    getAllHotDogs().then((hotDogs) => {
      setHotDogs(hotDogs);
    });
    getHotDogOrderByOrderId(id).then((hotDogOrders) => {
      setHotDogOrders(hotDogOrders);
      console.log(hotDogOrders);
    });
  }, []);
  const totalOrder = () => {
    return  hotDogOrders.length * 5;
 }
 order.total = totalOrder();

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
        <select style={{ width: "18rem" }}>
          {hotDogs?.map((hotdog) => (
            <option key={hotdog.id}>{hotdog.name}</option>
          ))}
        </select>
        <h2>Order Total:{order.total} </h2>
        <button type="button" className="btn btn-success">
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



// add a submit order button that closes the order and hides the update and delete options and writes
//closed on the order card.
