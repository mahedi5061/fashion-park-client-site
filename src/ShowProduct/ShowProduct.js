import React from 'react';
import { Card, CardImg, CardBody, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ShowProduct.css'

const ShowProduct = (props) => {
   
  const style = {
    marginTop: '10%', textDecoration: 'none', marginLeft: '10%', textAlign: 'center', borderRadius: '15px', backgroundColor: 'white'
  }

  const { name, price} = props.pd.data;
   const {imageUrl,_id}=props.pd;

  return (
  <>
    <Link  className="card-container" style={style}>
      <Card.Body>
        <Card.Img style={{ width: '150px', marginTop: '25px' }}  src={imageUrl} />
        <Card.Body>
        <h5>{name}</h5>
        <div className="row price-btn">
          <div className="col-md-4">
          <h4>${price}</h4>
          </div>
          <div className="col-md-8">
          <Link to={`/checkout/${_id}`}><Button>Buy Now</Button></Link>
          </div>
        </div>
        
        </Card.Body>
      </Card.Body>
    </Link>
    </>
  );

};

export default ShowProduct;