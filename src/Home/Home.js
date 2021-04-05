import React, { useEffect, useState } from 'react';
import './Home.css';
import ShowProduct from '../ShowProduct/ShowProduct';

const Home = () => {
    // This section is used to load data from database and set data in a state.
    
    const [products,setProducts]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/products')
        .then(res=>res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
     
    return (
        <>
            <div className="row">

                {
                    products.map(pd =><ShowProduct pd={pd} key={pd._id}></ShowProduct>)
                }
                </div> 
          
        </>
    );
};

export default Home;