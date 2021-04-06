import React from 'react';
import { Table } from 'react-bootstrap';

const ShowOrders = (props) => {
    const { name, email, phoneNumber, address } = props.pd.shipment;
    return (
            <div className ="showOrder">
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{address}</td>
                        <td>{phoneNumber}</td>
                    </tr>
                   
                    
                </tbody>
            </Table>
            </div>
         
    );
};

export default ShowOrders;