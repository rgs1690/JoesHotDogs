import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { getAllHotDogs, getHotDogById } from "../api/hotDogData";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createHotDogOrder,
  getHotDogOrderByOrderId,
} from "../api/hotDogOrderData";
import { getOrdersByUserId, getSingleOrder, updateOrder } from "../api/orderData";
import HDOCard from "./HDOCard";
import getCurrentUsersUid from "../helpers/helpers";

export default function CartForm( ) {
  const [hotDogOrders, setHotDogOrders] = useState([]);
  const [newHDO, setHDO] = useState({});
  const [hotDogs, setHotDogs] = useState([]);
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const totalOrder = hotDogOrders.length * 5;
  const UID = getCurrentUsersUid();

  useEffect(() => {
    getSingleOrder(id).then((order) => setOrder(order));
    getAllHotDogs().then((hotDogs) => {
      setHotDogs(hotDogs);
    });
    getHotDogOrderByOrderId(id).then((hotDogOrders) => {
      setHotDogOrders(hotDogOrders);
    });
   
  }, [newHDO]);
  const handleAddDog = () => {
    console.log("sending");
    console.log(newHDO);
    console.log(newHDO.orderId);
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
  const handleSubmit = (order) => {
    setOrder({
      ...order,
      total:totalOrder,
      status: false
    })
    console.log(order)
    updateOrder({
      id: order.id,
      userId: UID,
      cardNum: order.cardNum,
      expiration: order.expiration,
      nameOnCard: order.nameOnCard,
      billingZip: order.billingZip,
      address: order.address,
      phone: order.phone,
      date: order.date,
      total: totalOrder,
      status: false,
    delivery: order.delivery,
    }).then((res) => {
          console.log(res);
          navigate("/orders");
        })


  };

  return (
    <>
      <div>
        <h2>Your Order # {order.id}</h2>
        {hotDogOrders?.map((hdo) => (
          <HDOCard key={hdo.id} hdo={hdo} sethdos={setHotDogOrders} />
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
        <h2>Order Total: {totalOrder} </h2>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddDog}
        >
          Add to Order
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleSubmit(order)}
        >
          Submit Order
        </button>
      </div>
    </>
  );
}
// CartForm.propTypes = {
//   obj: PropTypes.shape({}),
// };
// CartForm.defaultProps = { obj: {} };

// add a submit order button that closes the order and hides the update and delete options and writes
//closed on the order card.
//add buttons for delete
