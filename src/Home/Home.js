import React, { useEffect, useState } from 'react';
import './Home.css';
import ShowProduct from '../ShowProduct/ShowProduct';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(50),
        },
    },
}));
const Home = () => {
    // This section is used to load data from database and set data in a state.

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInterval(function(){ 
            fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
        }, 500);
            
    }, [])
  
    const classes = useStyles();
    return (
        <>
            <div className="row">

                {
                    loading ? <div className={classes.root}>
                        <CircularProgress />
                        <CircularProgress color="secondary" />
                    </div> : products.map(pd => <ShowProduct pd={pd} key={pd._id}></ShowProduct>)
                }
            </div>

        </>
    );
};

export default Home;