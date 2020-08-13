import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';


const MessageTable = (props) => {
 
  const [isLoading, setLoading] = useState(false);
  const handleClick = () => setLoading(true);
  const messages = props.messages;

  const id = 1000;

  useEffect(() => {
    console.log(messages);
    
    if (isLoading) {
      // Fire event
      // window.Liferay.fire('some-event', id);
      
      console.log('Liferay event: ' + id);
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
   }, [isLoading]);
   
   function simulateNetworkRequest() {
     return new Promise((resolve) => setTimeout(resolve, 2000));
   }
  const listMessages = messages.map((message) =>
   <tr key={message.id}>
      <td>{message.id}</td>
      <td>{message.name}</td>
      <td>{message.description}</td>
      <td>{message.dateCreated}</td>
      <td>{message.dateModified}</td>
   </tr>
 );
  return (
   <> 
    <Table striped bordered hover size="sm">
    <thead>
        <tr>
        <th>ID#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Created</th>
        <th>Updated</th>
        </tr>
    </thead>
    <tbody>
      {messages!=null && messages.length >=1? listMessages: '...loading'}
    </tbody>
    </Table>
    <div>
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
      {isLoading ? 'Loading…' : 'Submit'}
      </Button>
    </div>
</>
  )
}
export default MessageTable;