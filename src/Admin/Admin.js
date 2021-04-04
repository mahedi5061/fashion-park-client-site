import React from 'react';
import './Admin.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useForm } from "react-hook-form";
import { Form, InputGroup, Navbar,FormControl,Button } from 'react-bootstrap';

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="admin">
 
       <Navigation

items={[
    {
        title: 'Manage Product',
        itemId: '/manageproduct',
    },
    {
        title: 'Add Product',
        itemId: '/addproduct',
    },
    {
        title: 'Edit Product',
        itemId: '/editproduct',
    },
]}
/>
 
 
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
       
      <input type="text" placeholder="Product Name"  />
      
      <input type="value"  placeholder="Weight"  className="ml-3"/>
      <input  type="value" placeholder="Price"  className="ml-3"/> 
      <input type="file" placeholder="Price" name="upload photo" className="ml-3 mt-3"/>
      <br></br>
      <input className="mt-3" type="submit" />
    </form>
      
      
        
        </div>

    );
};

export default Admin;