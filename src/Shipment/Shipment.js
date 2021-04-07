import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../App';
import ShowOrders from '../ShowOrders/ShowOrders';

const Shipment = () => {
    const [orderReview,setOrderReview]=useState([]);
    const [login, setLogin] = useContext(userContext);

    useEffect(() => {
        fetch('https://stormy-river-98706.herokuapp.com/orderReview?email='+login.email)
        .then(res=>res.json())
        .then(data=>setOrderReview(data))
    },[])
 
    return (
        <div>
        <h3 className="ship-form">You have order {orderReview.length}</h3>
             {
                orderReview.map(pd =><ShowOrders pd={pd} key={pd._id}></ShowOrders>)
             }
        </div>
    );
};

export default Shipment;