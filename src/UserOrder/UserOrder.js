import React from 'react';
import { Table } from 'react-bootstrap';

const UserOrder = (props) => {
     const {name,email,phoneNumber}=props.pd.shipment;
     const {price}=props.pd.data;
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.pd.data?.name}</td>
                        <td>{price}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phoneNumber}</td>
                    </tr>
                   
                    
                </tbody>
            </Table>
        </div>
    );
};

export default UserOrder;