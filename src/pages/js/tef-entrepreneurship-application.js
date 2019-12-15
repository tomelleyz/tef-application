import React from 'react'; 
import { Link } from 'react-router-dom';
import '../css/tef-entrepreneurship-application.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';

//
// Dismissible alert for widget
//
function AlertDismissible() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Alert show={show} variant="light">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          If you have any difficulty with any of the section
          of the application form, you can click <strong>Save Application </strong>
          to continue filling the form at a later time.
        </p>

        <div className="d-flex justify-content-start">
          <Button onClick={() => setShow(false)} variant="outline-secondary">
            Got it!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

//
// Component for the application page
//
function TEFEntrepreneurshipApplication(props) {
  return (
    <Row className="m-0">
      <Col lg={3} className="bg-white">
        <Container>

          <Card className="w-100 text-center shadow-sm border-0">
            <Card.Body className="h6">
              The Tony Elumelu Foundation
            </Card.Body>
          </Card>
          <p className="text-center">TEF APPLICATION ENDS IN:</p>
          <Card className="w-100 bg-danger text-center shadow-sm border-0">
            <Card.Body className="h5 text-white">
              300 24 57 06
            </Card.Body>
          </Card>

          <ul className="text-black-50">
            <li>
              <span className="text-danger h6">Getting to know you</span>
              <ul>
                <li>Your Bio</li>
                <li>Business Detail</li>
              </ul>
            </li>
            <li>
              <span className="h6">Knowledge Test</span>
              <ul>
                <li>Personality Test</li>
                <li>Cognitive Test</li>
              </ul>
            </li>
            <li>
              <span className="h6">Declaration</span>
              <ul>
                <li>Terms of Service</li>
                <li>Disclaimer</li>
              </ul>
            </li>
          </ul>

          <hr/>

          <Button variant="link" block>Save Application</Button>
          <Button variant="link" block>Take a Tour</Button>
          <Button variant="link" block>Read FAQs</Button>

          <Button variant="link">Privacy Policy</Button>
          &#9679;
          <Button variant="link">Terms of Use</Button>

        </Container>
      </Col>
      

      <Col lg={9} style={{ backgroundColor: '#f6f8fc'}}>
        <Container>

          <Dropdown>
            <Dropdown.Toggle variant="white" id="choose-language" className="shadow-sm float-lg-right bg-white rounded">
              English Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Hello World</Dropdown.Header>
              <Dropdown.Item active>English</Dropdown.Item>
              <Dropdown.Item>Francaise</Dropdown.Item>
              <Dropdown.Item>Portuguese</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h1>TEF Entrepreneurship Application</h1>
          <p>
            Welcome to the 2019 Tony Elumelu Foundation Entrepreneurship Programme
            Application. Complete your application in <strong>15 minutes.</strong>
          </p>

          <Row className="m-0">
            <Col lg={8}>
              {props.children}
            </Col>
            <Col lg={4}>
              <AlertDismissible />
              <Card className="w-50 h6">
                <Card.Body>Need Help?</Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </Col>
    </Row>
  );
}

//
// Form Component for Application Page 1
//
function YourBioForm() {
  return (
    <Form className="bg-white">
      <span className="h4 w-100">Personal Information</span>
      <p>Let's start with the basics.</p>
    </Form>
  );
}

function IdeaAndExperience() {
  return (
    <Form>
      <span className="h4 w-100">Applicant's Idea and Experience</span>
      <p>Let's start with the basics.</p>
    </Form>
  );
}

//
// Application Page 1
//
function TEFEntrepreneurshipApplication1() {
  return (
    <TEFEntrepreneurshipApplication> <YourBioForm /> </TEFEntrepreneurshipApplication>
  );
}

export default TEFEntrepreneurshipApplication1;