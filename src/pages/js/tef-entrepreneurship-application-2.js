import React from 'react';
import { TEFEntrepreneurshipApplication } from './tef-entrepreneurship-application';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SaveIcon from '@material-ui/icons/Save';

function IdeaAndExperience() {
  return (
    <Form className="bg-white px-5 py-4">
      <span className="h5 w-100">Applicant's 
        <span className="font-weight-light"> Idea and Experience </span>
      </span>
      <p className="mb-4">Let's start with the basics.</p>

      <Form.Group className="mb-4">
        <Badge variant="danger">1 of 3</Badge> <br/>
        <Form.Label>First off, tell us about your business idea</Form.Label>
        <Form.Control 
          as="textarea" 
          placeholder="Give a brief description of your business idea but if 
            you do not have a business idea, then describe a customer problem 
            that you might want to build a business around." 
          rows="3" />
      </Form.Group>

      <Form.Row className="mb-4">
        <Col lg={9}>
          <Badge variant="danger">2 of 6</Badge> <br />
          <Form.Label>What is your highest level of education?</Form.Label>
          <Form.Control as="select"> 
            <option>E.g. University degree</option>
            <option>Masters degree</option>
            <option>Doctorate degree</option>
            <option>MBA</option>
            <option>High School</option>
          </Form.Control>
        </Col>
      </Form.Row>

      <Form.Row className="mb-4">
        <Col lg={9}>
          <Badge variant="danger">3 of 6</Badge> <br />
          <Form.Label>How many years of work experience do you have?</Form.Label>
          <Form.Control as="select"> 
            <option>E.g. 0 to 2 years</option>
            <option>0 to 2 years</option>
            <option>3 to 5 years</option>
            <option>6 to 10 years</option>
            <option>11 years and above</option>
          </Form.Control>
        </Col>
      </Form.Row>

      <Form.Row className="mb-4">
        <Col lg={9}>
          <Badge variant="danger">4 of 6</Badge> <br />
          <Form.Label>Is your idea in your field of experience?</Form.Label> <br />
          <ButtonGroup>
            <Button variant="outline-secondary">Yes</Button>
            <Button variant="outline-secondary">No</Button>
          </ButtonGroup>
        </Col>
      </Form.Row>

      <Form.Row className="mb-4">
        <Col lg={9}>
          <Badge variant="danger">5 of 6</Badge> <br />
          <Form.Label>How many hours are you working on your idea per week?</Form.Label>
          <Form.Control as="select"> 
            <option>E.g. Part time, Full time</option>
            <option>Part time</option>
            <option>Full time</option>
          </Form.Control>
        </Col>
      </Form.Row>

      <Form.Row className="mb-5">
        <Col lg={9}>
          <Badge variant="danger">6 of 6</Badge> <br />
          <Form.Label>Are you currently making money from your idea?</Form.Label> <br />
          <ButtonGroup>
            <Button variant="outline-secondary">Yes</Button>
            <Button variant="outline-secondary">No</Button>
          </ButtonGroup>
        </Col>
      </Form.Row>

      <Row>
        <Col md={7}>
          <Link to="/tef-entrepreneurship-application-2" className="btn btn-danger">
            Continue to Business Detail 
            <ArrowForwardIcon color="disabled" className="align-top ml-2" />
          </Link>
        </Col>
        <Col md={5}>
          <Button variant="light">
            <SaveIcon /> 
            Save to continue later
          </Button>
        </Col>
      </Row>

    </Form>
  );
}

function TEFEntrepreneurshipApplication2() {
    return (
        <TEFEntrepreneurshipApplication> <IdeaAndExperience /> </TEFEntrepreneurshipApplication>
    );
}

export default TEFEntrepreneurshipApplication2;