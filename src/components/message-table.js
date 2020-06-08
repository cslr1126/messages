import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';


function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

const MessageTable =() => {
    const [isLoading, setLoading] = useState(false);
    const handleClick = () => setLoading(true);
    const id = 1000;

    useEffect(() => {
    if (isLoading) {
      // Fire event
      // window.Liferay.fire('some-event', id);
      
      console.log('Liferay event: ' + id);
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
     }, [isLoading]);
    return (
      <div>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>SR#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Status</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>JDF-38293</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Open</td>
                <td>motto@aol.com</td>
                </tr>
                <tr>
                <td>HDK-98288</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>In-progress</td>
                <td>jtho@gmail.com</td>
                </tr>
                <tr>
                <td>YUD-52728</td>
                <td>Larry</td>
                <td>Davis</td>
                <td>Pending</td>
                <td>ldavis@aol.com</td>
                </tr>
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
      </div> 
    )
}
export default MessageTable;