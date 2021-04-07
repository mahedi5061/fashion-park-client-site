import React, { useContext, useEffect, useState } from 'react';
 
import { userContext } from '../App';
import UserOrder from '../UserOrder/UserOrder';

const Orders = () => {
    const [orderProduct,setOrderProduct]=useState([])
    const [login, setLogin] = useContext(userContext);

    //loaded user orders information matching by email.

    useEffect(() => {
        fetch('https://stormy-river-98706.herokuapp.com/orderReview?email='+login.email)
        .then(res=>res.json())
        .then(data=>setOrderProduct(data))
    },[])
     
    return (
        <div>
            <h2 className="ship-form">Your Order is {orderProduct.length}</h2> 
            {
                orderProduct.map(pd=><UserOrder pd={pd} key={pd._id}></UserOrder>)
            }
            
        </div>
    );
};

export default Orders;