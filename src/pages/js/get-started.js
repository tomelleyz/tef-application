import React from 'react';
import { Link } from 'react-router-dom';
import '../css/get-started.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function GetStarted() {
    return (
      <Row className="justify-content-center align-items-center background-body m-0">
        <Col md={8} lg={6} className="bg-white m-4 m-md-0">

          <Row>
            <Col xs={12} className="text-center upper-text-container rounded-top">
              <h1 className="text-danger">Empowering</h1>
              <h1>African Entrepreneurs</h1>
            </Col>
            <Col xs={12} className="text-center lower-text-container rounded-bottom">
              <Container>
              <p className="text-white mb-5 px-md-5">
                Looking to get funding? The Tony Elumelu Foundation
                application wiil help you reach new heights.
              </p>
              
              <Link to="/application-process" className="btn btn-light font-weight-bold">Get Started <ArrowForwardIcon color="action" className="ml-4"/></Link>
              <Link to="/tef-entrepreneurship-application" className="text-white-50 float-right p-2 text-decoration-none">Skip Tour</Link>
              </Container>
            </Col>
          </Row>

        </Col>
      </Row>
    );
}

export default GetStarted;