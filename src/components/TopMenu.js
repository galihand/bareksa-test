import React from 'react'
import Logo from '../assets/Logo.svg'
import dot from '../assets/dot.svg'
import { FaChevronDown, FaCog, FaRegBell } from 'react-icons/fa'
import { Col, Form, Nav, Navbar, Row } from 'react-bootstrap'
import { format } from 'date-fns'


const TopMenu = props => {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Navbar.Brand href="#home"><img src={Logo} alt={Logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div className='d-flex align-items-center mt-2'>
              <img src={dot} alt={dot} />
              <div style={{ marginLeft: 15 }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className='user'>
                    <h4>Reinhart H.</h4>
                    <h5>Kemang, Jakarta</h5>
                  </div>
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </Nav>
          <Nav>
            <Row className=' align-items-center'>
              <Col className='mt-2'>
                <Form.Control type='text' placeholder='Search text' />
              </Col>
              <Col lg={2} className='mt-2'>
                <FaRegBell className='icon' />
              </Col>
              <Col lg={2} className='mt-2'>
                <FaCog className='icon' />
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar bg='light'>
        <div className='ml-auto date'>
          {format(new Date(), 'dd MMMM yyyy')}
        </div>
      </Navbar>
    </React.Fragment>
  )
}

export default TopMenu