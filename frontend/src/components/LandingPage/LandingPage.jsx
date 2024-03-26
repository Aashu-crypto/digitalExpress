import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container'; 
import '../../assets/css/home.css'
import banner from '../../assets/img/banner.svg'
import bannerFull from '../../assets/img/bannerFull.svg'
import Todays from './Todays';

const LandingPage = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={2}>
            <div className="rightMenu">
          <div className="rightMenuItem mb-1"><span> Women's Fashion</span></div>
          <div className="mb-1"><span>Men's Fashion</span></div>
          <div  className="mb-1"><span>Electronics</span></div>
          <div  className="mb-1"><span>Home & lifestyle</span></div>
          <div  className="mb-1"><span>Medicine</span></div>
          <div  className="mb-1"><span>Sports and outdoor</span></div>
          <div  className="mb-1"><span>Baby's & toys</span></div>
          <div  className="mb-1"><span>Groceries & pets</span></div>
          <div  className="mb-1"><span>Health & beauty</span></div>

      </div>
          </Col>
          <Col md={10}>
            <div className="banner">
              <Container>
                <Row className="pt-4">
                  
                  {/* <Col md={6}>
                    <div className="p-4"><span>iphone 14 series</span></div>
                    <div><h1>Up to 10% off Voucher</h1></div>

                    <div className="p-4"><p>Shop Now</p></div>
                  </Col>
                  <Col md={6}>
                    <img src={banner} alt="banner"/>
                  </Col> */}

                  <img src={bannerFull} alt="banner"/>
                
                </Row>
              </Container>
            </div>
          </Col>
        </Row>

         <div className="today">
        <Todays/>
        </div>
      </Container>
    </div>
  )
}

export default LandingPage