import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useResource from '../Hooks/useResources';


function Your() {
  const { resources, getResource, fetchResources, BorrowedResources } = useResource()

  useEffect(() => {
    BorrowedResources()
    console.log("otside hook", resources)
  }, []); // Run the effect only once when the component mounts

  return (
    <div className="p-3">
      <Row xs={1} md={2} lg={3} className="g-4">
        {resources?.map((resource) => (
          <Col key={resource._id}>
            <Card>
              {/* Check if the resource image exists, otherwise show fallback image */}
              <Card.Img
                variant="top"
                crossOrigin="anonymous" // Fixed camelCase
                src={resource.resource.resourceImage
                  ? `http://localhost:3000/${resource.resource.resourceImage.replace(/\\/g, '/')}`
                  : 'http://localhost:3000/uploads/resources/default-image.jpg'} />
              <Card.Body>
                <Card.Title>{resource.resource.Resourcename}</Card.Title>
                <Card.Text><b>Description:</b> {resource.resource.resourceDescription}</Card.Text>
                <Card.Text><b>Category:</b> {resource.resource.ResourceCategory}</Card.Text>
                {/* <Button variant="primary" onClick={() => handleButtonClick(resource)}>Get</Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Your;
