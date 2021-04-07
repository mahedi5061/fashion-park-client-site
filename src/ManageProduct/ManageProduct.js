import React from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './ManageProduct.css'

const ManageProduct = (props) => {
    const { name, price, weight } = props.pd.data;
    const {_id}=props.pd;
    //delete item from database.
    const handleDeleteItem=(id) => {
        
        fetch('https://stormy-river-98706.herokuapp.com/productDelete/'+id,{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            alert('Item delete successfully')
        })
    }
    return (
        <div className="manageProduct" >
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{weight}</td>
                        <td>{price}</td>
                        <td><FontAwesomeIcon icon={faTrashAlt} onClick={()=>handleDeleteItem(_id)} className="deleteButton"></FontAwesomeIcon></td>
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default ManageProduct;