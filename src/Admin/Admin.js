import React, { useState } from 'react';
import './Admin.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faEdit,faThLarge} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios';
 

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [manageProduct,setManageProduct]=useState(true);
    const [imageUrl,setImageUrl]=useState(null);
    const onSubmit = data => {
        const eventData = {
           name: data.name,
           imageUrl: imageUrl

        }
    };
    const handleProduct=()=>{
        setManageProduct(false)
    }
    const handleAddProduct=()=>{
        setManageProduct(true)
    }
    const imageUpload=event => {
        console.log(event.target.files[0])
        const imageData=new FormData();
        imageData.set('key','d30ee21879b0a937f8035c54640a59a9');
        imageData.append('image',event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (res) {
            setImageUrl(res.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="admin">
    
     <div className="nv-bar">
     <Link  onClick={handleProduct} to="#manageproduct" className="nv"><FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon> Manage Product</Link><br></br>
      <Link  onClick={handleAddProduct} to="#addproduct" className="nv"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Product</Link><br></br>
      <Link   to="#editproduct" className="nv"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit Product</Link>
     </div>
  {
    manageProduct? <form className="form" onSubmit={handleSubmit(onSubmit)}>
       
       <input name="Product Name" type="text" placeholder="Product Name"  />
       
       <input name="Weight" type="value"  placeholder="Weight"  className="ml-3"/>
       <input name="Price" type="value" placeholder="Price"  className="ml-3"/> 
       <input type="file" placeholder="Price" name="upload photo" onChange={imageUpload} className="ml-3 mt-3"/>
       <br></br>
       <input className="mt-3" type="submit" />
     </form>:<h3>success</h3>
  }
       
      
      
        
        </div>

    );
};

export default Admin;