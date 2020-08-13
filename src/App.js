import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MessageLayout from './layouts/MessageLayout';

function App() {
  return (
    <Container>
      <Row>
        <Col>
         <MessageLayout />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
