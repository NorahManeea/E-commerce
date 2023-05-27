import React from 'react';
import Products from '../products';
import { Row, Col } from 'react-bootstrap';


export default function HomeScreen() {
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {Products.map((singleProduct)=> {
            return(
                <Col sm={12} md={6}>
                <div>{singleProduct.name}</div>
            </Col>
            )
          
        })}

    </Row>
      </>
    
   
  )     
}
