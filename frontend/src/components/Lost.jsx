import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useLostAndFoundManagement from '../Hooks/useLostFound';

function Lost() {
  const [data, setData] = useState([]);
  const {fetchLostItems,lostItems}=useLostAndFoundManagement()

  useEffect(() => {
    fetchLostItems()
  }, []);

  const handleButtonClick = (resource) => {
    // Handle button click event here
    console.log('Button clicked for resource:', resource);
  };
  
  return (
    <div className='p-3'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {lostItems?.map(resource => (
          <Col key={resource._id}>
            <Card>
            <Card.Img variant="top" crossOrigin="anonymous" src={resource.image} />
              <Card.Body>
                <Card.Title>{resource.title}</Card.Title>
                <Card.Text><b>Description:</b> {resource.description}</Card.Text>
                <Card.Text><b>Date:</b> {resource.date}</Card.Text>
                <Card.Text><b>Place:</b> {resource.place}</Card.Text>
                {/* <Button variant="primary" onClick={() => handleButtonClick(resource)}>Get</Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Lost;
