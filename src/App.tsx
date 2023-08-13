import React from 'react';
import './App.css';
import {
  Accordion,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row
} from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid>
        <Navbar bg="light" expand="lg" className="border-bottom mb-4">
          <Navbar.Brand href="#">Your Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Row className="border-right mb-4">
          <Col md={2}>
            <Card border="light">
              <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion 1</Accordion.Header>
                  <Accordion.Body>
                    <a href="">
                      <Card border="light">
                        <Card.Body>This is some text within a card body.</Card.Body>
                      </Card>
                    </a>
                    <a href="">
                      <Card border="light">
                        <Card.Body>This is some text within a card body.</Card.Body>
                      </Card>
                    </a>
                    <Card border="light">
                      <Accordion alwaysOpen flush defaultActiveKey="4">
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>Accordion 1</Accordion.Header>
                          <Accordion.Body>
                            <a href="">
                              <Card border="light">
                                <Card.Body>This is some text within a card body.</Card.Body>
                              </Card>
                            </a>
                            <a href="">
                              <Card border="light">
                                <Card.Body>This is some text within a card body.</Card.Body>
                              </Card>
                            </a>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Card>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion 2</Accordion.Header>
                  <Accordion.Body>
                    <a href="">
                      <Card border="light">
                        <Card.Body>

                          1st option asd
                        </Card.Body>
                      </Card>
                    </a>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion 3</Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: '50rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title>Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
