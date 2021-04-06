import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../App';
import './Checkout.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from 'react-router';
 
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const { id } = useParams();
    const [orderBtn, setOrderBtn] = useState({});
    const [placeOrderBtn, setPlaceOrderBtn] = useState(true);
    const { register, handleSubmit, watch, errors } =useForm();
    const [login, setLogin] = useContext(userContext);
    const history= useHistory()
    const onSubmit = data =>{
      const orderDetails = {
        ...login,
        shipment:data,
        ...orderBtn,
      
      }
 
        fetch('http://localhost:5055/addOrder',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
         body:JSON.stringify(orderDetails) 
        })
        .then(res=>res.json())
        .then(data =>{
          if(data){
            alert('Your order is successfully placed.')
          }
        })
    history.push("/shipment")
    };
    
    useEffect(() => {
      fetch('http://localhost:5055/product/'+id)
      .then(res=>res.json())
      .then(data =>{
        setOrderBtn(data[0])
      })
  },[id])
  

    const handleOrder = () => {
        setPlaceOrderBtn(false);
    }

    return (
        <div >
            {
          placeOrderBtn ?
          <div className ="order">  
  <Table striped bordered hover>        
  <thead>
    <tr>
       
      <th>Description</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>{orderBtn?.data?.name}</td>
      <td>1</td>
      <td>${orderBtn?.data?.price}</td>
    </tr>
     
  </tbody>
  </Table>
  <button onClick={handleOrder} className="mt-3 place-order">place order</button></div>:

  <form  className="ship-form" onSubmit={handleSubmit(onSubmit)} >
       
       <input name="name" defaultValue={login.name} ref={register({ required: true })} placeholder="Your Name"/>
       {errors.name && <span className="error">Name is required</span>}

       <input name="email" defaultValue={login.email} ref={register({ required: true })} placeholder="Your Email"/>
       {errors.email && <span className="error">Email is required</span>}

       <input name="address" ref={register({ required: true })} placeholder="Your Address" />
       {errors.address && <span className="error">Address is required</span>}

       <input name="phoneNumber" ref={register({ required: true })} placeholder="Your Phone Number"/>
       {errors.phoneNumber && <span className="error">Phone number is required</span>}

        <input  type="submit"/> 
     </form>  
   
        }
        </div>

        
    );
};

export default Checkout;