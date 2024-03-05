import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import loginImage from '../assets/img/loginImage.svg'
import Container from 'react-bootstrap/esm/Container';

import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css'
import { Link } from 'react-router-dom';

const Login = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }


  return (
    <div className="signup">
  

<Row>
        <Col sm={7}>
         <img src={loginImage} alt="loginimg"/>
        </Col>

        <Col sm={5}>
<div className="p-5" >
  <h2>Log in to Digital Express</h2>
  <p>Enter your details below</p>


  <Form noValidate validated={validated} onSubmit={handleSubmit}>


 



        <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustom02">
        
         <Form.Control
            required
            type="text"
            placeholder="Email or phone number"
            
          />
      
        </Form.Group>

        </Row>

        <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustom03">
        
         <Form.Control
            required
            type="text"
            placeholder="Password"
            
          />
        
        </Form.Group>


         <div className="pt-4 d-flex">
            <div>
        <Button variant="danger" type="submit">
        Login
      </Button>
      </div>
      <div className="ms-auto">
        <p><Link to="#">Forgot Password</Link></p>
      </div>
      </div>


      

        </Row>
    </Form>
</div>

        </Col>
      </Row>
      
    
    </div>
  )
}

export default Login