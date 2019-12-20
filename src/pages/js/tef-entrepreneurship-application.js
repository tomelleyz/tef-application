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
import Badge from 'react-bootstrap/Badge';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import InputGroup from 'react-bootstrap/InputGroup';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SaveIcon from '@material-ui/icons/Save';
import FormatAlignLeftRoundedIcon from '@material-ui/icons/FormatAlignLeftRounded';
import FormatIndentIncreaseRoundedIcon from '@material-ui/icons/FormatIndentIncreaseRounded';
import CancelIcon from '@material-ui/icons/Cancel';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

//
// Dismissible alert for widget
//
function AlertDismissible() {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <Alert show={show} className="application-tips mb-5 p-4">
        <Alert.Heading className="h6"><span role="img" aria-label="star">&#11088;</span> Application Tips</Alert.Heading>
        <p style={{ fontSize: '.85rem'}}>
          If you have any difficulty with any of the section
          of the application form, you can click 
          <Button variant="link" size="sm" className="text-dark"><SaveIcon className="align-top" fontSize="small"/> Save Application</Button>
          to continue filling the form at a later time.
        </p>

        <div className="d-flex justify-content-start">
          <Button onClick={() => setShow(false)} variant="outline-secondary" size="sm" className="rounded-pill">
            <CancelIcon fontSize="small" className="align-top" /> Got it!
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
export function TEFEntrepreneurshipApplication(props) {
  return (
    <Row className="m-0">
      <Col lg={2} className="bg-white px-0">
        <Container>

          <Card className="w-100 text-center shadow-sm border-0 mt-4 mb-2">
            <Card.Body className="h6 p-3">
              The Tony Elumelu Foundation
            </Card.Body>
          </Card>
          <p className="text-center">TEF APPLICATION ENDS IN:</p>
          <Card className="w-100 bg-danger text-center shadow-sm border-0">
            <Card.Body className="h5 text-white p-3">
              300 24 57 06
            </Card.Body>
          </Card>

          <ul className="text-black-50 mt-4">
            <li>
              <span className="text-danger h6">Getting to know you</span>
              <ul>
                <li className="pt-2">Your Bio</li>
                <li className="pt-2">Business Detail</li>
              </ul>
            </li>
          </ul>
          <ul className="text-black-50 mt-5">
            <li>
              <span className="h6">Knowledge Test</span>
              <ul>
                <li className="pt-2">Personality Test</li>
                <li className="pt-2">Cognitive Test</li>
              </ul>
            </li>
          </ul>
          <ul className="text-black-50 my-5">
            <li>
              <span className="h6">Declaration</span>
              <ul>
                <li className="pt-2">Terms of Service</li>
                <li className="pt-2">Disclaimer</li>
              </ul>
            </li>
          </ul>

          <hr className="mx-3" style={{ marginTop: '10rem'}}/>

          <Button variant="link" className="text-left text-dark" block><SaveIcon className="align-top"/> Save Application</Button>
          <Button variant="link" className="text-left text-dark" block><FormatIndentIncreaseRoundedIcon className="align-top" /> Take a Tour</Button>
          <Button variant="link" className="text-left text-dark mb-5" block><FormatAlignLeftRoundedIcon className="align-top" /> Read FAQs</Button>

          <Container fluid={true} className="text-black-50 mt-5 p-0">
          <Button variant="link" className="text-black-50 px-1" style={{ fontSize: '.8rem'}}>Privacy Policy</Button>
          &#9679;
          <Button variant="link" className="text-black-50 px-1" style={{ fontSize: '.8rem'}}>Terms of Use</Button>
          </Container>

        </Container>
      </Col>
      

      <Col lg={10} className="py-lg-5 pl-lg-5 main-content-part">
        <Container>

          <Dropdown className="container">
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

          <Container className="pb-4 main-page-title">
          <h1>TEF Entrepreneurship Application</h1>
          <p>
            Welcome to the 2019 Tony Elumelu Foundation Entrepreneurship Programme
            Application. Complete your application in <strong>15 minutes.</strong>
          </p>
          </Container>

          <Row className="m-0">
            <Col lg={8}>
              <Row className="m-0 decorative-line-above-form">
                <Col className="bg-danger"></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
              {props.children}
            </Col>
            <Col lg={4}>
              <AlertDismissible />
              <Card className="w-75 h6">
                <Card.Body className="py-3 px-4"><HelpOutlineIcon className="help-icon mr-2 rounded-circle text-success" /> Need Help?</Card.Body>
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
    <Form className="bg-white px-5 py-4">
      <span className="h5 w-100">Personal  
        <span className="font-weight-light"> Information </span>
      </span>
      <Badge className="text-success green-badge">1 of 3</Badge>
      <p className="mb-5">Let's start with the basics.</p>

      <Row className="mb-4">
        <Col md={6} controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control type="text" placeholder="Ayobola" />
        </Col>
        <Col md={6} controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="text" placeholder="Adedayo" />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6} controlId="gender">
          <Form.Label>Gender</Form.Label> <br/>
          <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton value={1} variant="outline-danger">Male <PersonRoundedIcon className="align-top" /></ToggleButton>
              <ToggleButton value={2} variant="outline-danger">Female <PersonOutlineRoundedIcon className="align-top" /></ToggleButton>
              <ToggleButton value={3} variant="outline-danger">Others</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
          
        </Col>
        <Col md={6} controlId="birthday">
          <Form.Label>Birthday</Form.Label>
          <InputGroup>
            <Form.Control
              type="date"
              placeholder="DD-MM-YYYY"
              aria-label="Applicant's Birthday"
              aria-describedby="basic-addon2"
              className="border-right-0"
            />
            <InputGroup.Append>
            <InputGroup.Text id="basic-addon2" className="bg-white border-left-0"><EventOutlinedIcon color="action" /></InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Label>Country</Form.Label>
          <Form.Control as="select"> 
            <option>Nigeria</option>
            <option>Ghana</option>
            <option>South Africa</option>
            <option>Kenya</option>
            <option>Cameroun</option>
          </Form.Control>
        </Col>
        <Col md={6}>
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Lagos" />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Label>Phone number</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" className="bg-white">+234</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="tel"
              placeholder="7037858090"
              aria-label="Phone number"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="E.g. name@gmail.com" />
          <Form.Text className="text-muted">
            We'll email you important reminders.
          </Form.Text>
        </Col>
      </Row>

      <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-5">
        <Form.Label>Address</Form.Label>
        <Form.Control as="textarea" placeholder="Type in your residential address" rows="3" />
      </Form.Group>

      <hr className="mx-n5 mb-4" style={{ borderTop: '1px dashed silver'}} />

      <span className="h5 w-100">Next  
        <span className="font-weight-light"> of Kin </span>
      </span>
      <Badge className="text-success green-badge">1 of 3</Badge>
      <p className="mb-5">
        It's important to have an alternative contact 
        detail in case you're unreachable.
      </p>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Label>Full name</Form.Label>
          <Form.Control type="text" placeholder="Titilayo Ayobaye" />
        </Col>
        <Col md={6}>
          <Form.Label>Email of next of kin</Form.Label>
          <Form.Control type="email" placeholder="E.g. name@gmail.com" />
          <Form.Text className="text-muted">
            We'll not spam them.
          </Form.Text>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <Form.Label>Phone number</Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" className="bg-white">+234</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="tel"
              placeholder="7037858090"
              aria-label="Phone number"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>

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


//
// Application Page 1
//
function TEFEntrepreneurshipApplication1() {
  return (
    <TEFEntrepreneurshipApplication> <YourBioForm /> </TEFEntrepreneurshipApplication>
  );
}

export default TEFEntrepreneurshipApplication1;