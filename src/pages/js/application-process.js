import React from 'react';
import { Link } from 'react-router-dom';
import '../css/application-process.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function ApplicationProcess() {
    return (
      <Row className="justify-content-center align-items-center background-body m-0">
        <Col md={8} lg={6} className="bg-white m-4 m-md-0">

          <Row>
            <Col xs={12} className="text-center upper-container rounded-top">
              <h1><span className="text-danger">Super</span> Easy</h1>
              <h1>Application Process</h1>
            </Col>
            <Col xs={12} className="text-center lower-container rounded-bottom">
              <Container>
              <p className="text-white mb-5 px-md-5">
                Simply complete the entire application in less than 
                20 minutes. Isn't that amazing?
              </p>
              
              <Link to="/get-started" className="text-white-50 float-left p-2 text-decoration-none">Go Back</Link>
              <Link to="/helpful-widgets" className="btn btn-light font-weight-bold">Next Page <ArrowForwardIcon color="action" className="ml-4"/></Link>
              <Link to="/tef-entrepreneurship-application" className="text-white-50 float-right p-2 text-decoration-none">Skip Tour</Link>
              </Container>
            </Col>
          </Row>

        </Col>
      </Row>
    );
}

export default ApplicationProcess;