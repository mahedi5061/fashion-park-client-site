import React, { useEffect, useState } from 'react';
import './Home.css';
import fakeData from '../../src/fakeData.json';
import ShowProduct from '../ShowProduct/ShowProduct';

const Home = () => {
    // This section is used to load data from fakeData and set data in a state.
    
    const [products,setProducts]=useState([]);
    useEffect(() => {
        setProducts(fakeData)
    },[])
    return (
        <>
            <div className="row">

                {
                    products.map(pd =><ShowProduct pd={pd} key={pd.id}></ShowProduct>)
                }
                </div> 
          
        </>
    );
};

export default Home;