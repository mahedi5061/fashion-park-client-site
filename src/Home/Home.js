import React, {  useContext, useEffect, useState } from 'react';
import './Home.css';
import ShowProduct from '../ShowProduct/ShowProduct';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { productContext } from '../App';
 
//spinner design property.
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(80),
        },
    },
}));
const Home = () => {
    // This section is used to load data from database and set data in a state.

    const [products, setProducts] = useContext(productContext);
    const [loading, setLoading] = useState(true);

    //data load in home page with time interval
    useEffect(() => {
        setInterval(function(){ 
            fetch('https://stormy-river-98706.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
        }, 500);
            
    }, [products])
  
    const classes = useStyles();
    return (
        <>
            <div className="row">

                {
                    loading ? <div className={classes.root}>
                        
                        <CircularProgress color="secondary" className="ml-5"/>
                    </div> : products.map(pd => <ShowProduct pd={pd} key={pd._id}></ShowProduct>)
                }
            </div>

        </>
    );
};

export default Home;