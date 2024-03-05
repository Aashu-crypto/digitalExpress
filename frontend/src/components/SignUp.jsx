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
import { backendHost } from './ApiConfig';
import axios from 'axios';

const SignUp = () => {

  const [validated, setValidated] = useState(false);


  const handleSubmit = (e) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    // setValidated(true);

    e.preventDefault();
    axios.post(`${backendHost}/user/createUser`, {
        // "citycode": parseInt(cityCode),
        "username": 'aashutosh@gmail.com',
        "name":'Mansi',
        "password":'1324wtrdh',
       

    })
    .then(res => {
        console.log(res)
        })
  
    .catch(res => console.log(res))
  


  }


  return (
    <div className="signup">
  

<Row>
        <Col sm={7}>
         <img src={loginImage} alt="loginimg"/>
        </Col>

        <Col sm={5}>
<div className="p-5" >
  <h2>Create an Account</h2>
  <p>Enter your details below</p>


  <Form onSubmit={handleSubmit}>


  <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustom01">
        
         <Form.Control
            required
            type="text"
            placeholder="First Name"
            
          />
        
        </Form.Group>

        </Row>



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


         <div className="pt-4">
        <Button variant="danger" type="submit" style={{width:"322px"}}>
        Create Account
      </Button>
      </div>


      <div className="pt-2">
        <Button  variant="outline-secondary" type="submit" style={{width:"322px"}}>
        Sign up with Google
      </Button>
      </div>



      <div className="pt-3">
        <p className="" >Already have an account? <span className="fw-bold"><Link to="/login">Login</Link></span></p>
      </div>


        </Row>
    </Form>
</div>

        </Col>
      </Row>
      
    
    </div>
  )
}

export default SignUp