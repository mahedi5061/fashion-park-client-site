import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../App';
import './Checkout.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import fakeData from '../fakeData.json';
import { Table } from 'react-bootstrap';


const Checkout = () => {
    const { id } = useParams();
    console.log(id)
    const [orderBtn, setOrderBtn] = useState({});
    const [placeOrderBtn, setPlaceOrderBtn] = useState(true);
    const { handleSubmit } = useForm();
    const [login, setLogin] = useContext(userContext);
    const product = fakeData.find(pd => pd.id == id);
    useEffect(() => {
        setOrderBtn(product);
    }, [id])

    const handleOrder = () => {
        setPlaceOrderBtn(false);
    }
console.log(placeOrderBtn)

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
     
      <td>{orderBtn.name}</td>
      <td>1</td>
      <td>${orderBtn.price}</td>
    </tr>
     
  </tbody>
  </Table>
  <button onClick={handleOrder} className="mt-3 place-order">place order</button></div>:<h2>success</h2>   
        }
        </div>

        
    );
};

export default Checkout;