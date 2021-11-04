import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../products'
import { Rating } from '../components/Rating'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'
// , Button, Card

function ProductScreen({match }) {
  const product = products.find((p) => p._id === match.params.id)
  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>

        </Col>
      </Row> 
    </div>
  )
}

export default ProductScreen
