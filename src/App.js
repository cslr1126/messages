import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MessageTable from './components/message-table';

function App() {
  return (
    <Container>
      <Row>
        <Col>
         <MessageTable />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
