import React from 'react'; 
import { Link } from 'react-router-dom';
import '../css/helpful-widgets.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function HelpfulWidgets() {
  return (
    <Row className="justify-content-center align-items-center background-body m-0">
      <Col md={8} lg={6} className="bg-white m-4 m-md-0">

        <Row>
          <Col xs={12} className="text-center top-container rounded-top">
            <h1 className="text-danger">Introducing</h1>
            <h1>Helpful Widgets</h1>
          </Col>
          <Col xs={12} className="text-center bottom-container rounded-bottom">
            <Container>
              <p className="text-white mb-5 px-md-5">
                Building a business is hard enough. We designed interesting widgets
                to help you through the application.
              </p>
              
              <Link to="/application-process" className="text-white-50 float-left p-2 text-decoration-none">Go Back</Link>
              <Link to="/tef-entrepreneurship-application" className="btn btn-light font-weight-bold">Start Application <ArrowForwardIcon color="action" className="ml-sm-4"/></Link>
              <Link to="/tef-entrepreneurship-application" className="text-white-50 float-right p-2 text-decoration-none">Skip Tour</Link>
            </Container>
          </Col>
        </Row>

      </Col>
    </Row>
  );
}

export default HelpfulWidgets;