import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import '../App.css'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="">
          <Col>
          <div className="footerTitle">
            <h5>Digital Express</h5>
          </div>

          <div className="footerSubtitle">
            <p>Subscribe</p>
          </div>
          <div>
            <p>Get 10% off your first order</p>
          </div>
          <div>
            <Form>
            <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom02">
        
         <Form.Control
            required
            type="text"
            placeholder="Enter your email"
            
          />
      
        </Form.Group>

        </Row>
            </Form>
          </div>
          
          </Col>
          <Col>
          <div className="footerTitle">
            <h5>Support</h5>
          </div>


          <div className="footerPara">
            <p> 92/B Whitefield, Bangalore,Bengaluru, Karnataka,345669</p>
          </div>

          <div className="footerPara">
            <p> digitalexpress1830@gmail.com</p>
          </div>

          <div className="footerPara">
            <p> +91-9087654321</p>
          </div>

          </Col>
          <Col>
          <div className="footerTitle">
            <h5>Account</h5>
          </div>

          <div className="footerPara">
            <p> My Account</p>
          </div>

          <div className="footerPara">
            <p> Login/Register</p>
          </div>
          
          <div className="footerPara">
            <p> Cart</p>
          </div>

          <div className="footerPara">
            <p> Whishlist</p>
          </div>

          <div className="footerPara">
            <p>Shop</p>
          </div>
          </Col>
          <Col>

          <div className="footerTitle">
            <h5>Quick Link</h5>
          </div>

          <div className="footerPara">
            <p>Privacy Policy</p>
          </div>

          <div className="footerPara">
            <p>Terms of use</p>
          </div>
          <div className="footerPara">
            <p>FAQ</p>
          </div>

          <div className="footerPara">
            <p>Contact</p>
          </div>
          
          </Col>
          <Col>
          <div className="footerTitle">
            <h5>Download App</h5>
          </div>

          <div className="footerPara">
            <p>Save $5 with App New users only</p>
          </div>
          
          
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer