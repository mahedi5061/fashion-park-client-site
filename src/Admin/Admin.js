import React, { useEffect, useState } from 'react';
import './Admin.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faEdit,faThLarge} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ManageProduct from '../ManageProduct/ManageProduct';
 

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [manageProduct,setManageProduct]=useState(true);
    const [imageUrl,setImageUrl]=useState(null);
    const [manageAllProduct,setManageAllProduct]=useState([]);
    const onSubmit = data => {
         
        const eventData = {
            data:data,
            imageUrl:imageUrl
            
        };
        
        fetch(`http://localhost:5055/addProduct`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res =>{
            console.log('Successfully',res)
        })
    };

    useEffect(() => {
        fetch('http://localhost:5055/products')
        .then(res=>res.json())
        .then(data =>{
            setManageAllProduct(data)
        })
    },[])

    const handleProduct=()=>{
        setManageProduct(false)
    }
    const handleAddProduct=()=>{
        setManageProduct(true)
    }
    const imageUpload=event => {
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
       
       <input name="name" type="text" placeholder="Product Name" ref={register} />
       
       <input name="weight"  type="text"  placeholder="Weight" ref={register} className="ml-3"/>
       <input name="price" type="text" placeholder="Price" ref={register} className="ml-3"/> 
       <input type="file"   onChange={imageUpload} className="ml-3 mt-3"/>
       <br></br>
       <input className="mt-3" type="submit" />
     </form>:<>
            {
                manageAllProduct.map(pd=><ManageProduct pd={pd} key={pd._id}></ManageProduct>)
            }

     </>
  }
       
      
      
        
        </div>

    );
};

export default Admin;