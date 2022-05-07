import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getAllHotDogs, getHotDogById } from "../api/hotDogData";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createHotDogOrder,
  getHotDogOrderByOrderId,
} from "../api/hotDogOrderData";
import { getSingleOrder } from "../api/orderData";

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
  }, [newHDO]);
  const totalOrder = () => {
    return hotDogOrders.length * 5;
  };
  order.total = totalOrder();
  const handleAddDog = () => {
    console.log("sending");
    console.log(newHDO);
    createHotDogOrder(newHDO).then(
      getHotDogOrderByOrderId(order.id).then(setHotDogOrders)
    );
  };

  const changeDog = (newDogId) => {
    getHotDogById(newDogId).then((res) => {
      console.log("changing");
      console.log(res);
      setHDO({
        id: 6,
        orderId: order.id,
        hotDogId: res.id,
        HotDogName: res.name,
      });
    });
  };

  return (
    <>
      <div>
        <h2>Your Order # {order.id}</h2>
        {hotDogOrders?.map((hdo) => (
          <p key={hdo.id}>{hdo.hotDogName}</p>
        ))}
      </div>
      <div></div>
      <div>
        <select
          style={{ width: "18rem" }}
          onChange={(event) => changeDog(event.target.value)}
          value={newHDO}
        >
          <option></option>
          {hotDogs?.map((hotdog) => (
            <option key={hotdog.id} value={hotdog.id}>
              {hotdog.name}
            </option>
          ))}
        </select>
        <h2>Order Total:{order.total} </h2>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddDog}
        >
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
