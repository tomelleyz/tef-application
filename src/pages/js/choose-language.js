import React from 'react'; 
import { Link } from 'react-router-dom';
import '../css/choose-language.css';
import SVG4 from '../images/SVG4.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function LanguageChoice(props) {
  return (
    <Link to="/get-started" className="link m-2 language-card">
    <Card role="button" className="btn text-center py-3 px-0 border-0">
      <Card.Img variant="top" src={SVG4} className="rounded-circle mx-auto card-img" />
      <Card.Body>
        <small className="text-muted">{props.greeting} <span role="img" aria-label="waving hand emoji">&#128075;</span></small>
        <h6>{props.language}</h6>
      </Card.Body>
    </Card>
    </Link>
  );
}

function ChooseLanguage() {
  return (
    <Row className="justify-content-center align-items-center main-container m-0">
      <Col md={8} lg={6} className="m-4 m-md-0">
        
          <Row>
            <Col xs={12} className="text-center rounded-top welcome-text-container">
              <h3>Welcome to <span className="text-danger">TEF Application</span></h3>
              <h4><small className="text-muted">What language would you prefer?</small></h4>
            </Col>
            <Col xs={12} className="rounded-bottom py-4" style={{ backgroundColor: '#e6e6e6'}}>
              <Container className="language-cards-container">
                <LanguageChoice greeting="Hello Africa" language="English Language"/>
                <LanguageChoice greeting="Bonjour Afrique" language="Langue Francaise"/>
                <LanguageChoice greeting="Hello Africa" language="Arabic Language"/>
                <LanguageChoice greeting="No embadda Africa" language="Fulah demngal"/>
                <LanguageChoice greeting="Ola Africa" language="Idioma Portugues"/>
              </Container>
            </Col>
          </Row>
        
      </Col>
    </Row>
  );
}

export default ChooseLanguage;