import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import one from '../assets/1.jpeg';
import lib from '../assets/lib.jpg';
import resource from '../assets/resource.jpeg';
import feed from '../assets/feed.jpeg';
import env from '../assets/environment.jpeg';

function CarouselSection() {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <div className="col">
          <Card>
            <Card.Img variant="top" src={one} />
            <Card.Body>
              <Card.Title>Campus Events and Communication</Card.Title>
              <Card.Text>
                The campus management lacks organization regarding event sequencing, notification, and management. There is a need for improved event coordination and communication to ensure timely and effective implementation.
              </Card.Text>
              <Link to='/events' className='btn btn-primary'>Let's manage Events</Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Img variant="top" src={lib} />
            <Card.Body>
              <Card.Title>Campus Resource Optimization</Card.Title>
              <Card.Text>
                The college lacks resource optimization for old books/second-hand books and hardware. There is a need to efficiently manage and repurpose these resources.
              </Card.Text>
              <Link to='/resources' className='btn btn-primary'>Let's manage Resources</Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Img variant="top" src={resource} />
            <Card.Body>
              <Card.Title>Automated Library Services</Card.Title>
              <Card.Text>
                The college library lacks online book requests and fine-tracking facilities for students. Implementing these would enable students to request books and view submission deadlines and associated fines conveniently.
              </Card.Text>
              <Link to='/library' className='btn btn-primary'>Let's manage Library</Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Img variant="top" src={feed} />
            <Card.Body>
              <Card.Title>Campus Feedback and Improvement</Card.Title>
              <Card.Text>
                Although there is a suggestion box in the college,The college lacks an online feedback system for students, faculty, and staff to provide valuable feedback, suggestions.
              </Card.Text>
              <Link to='/feedback' className='btn btn-primary'>Let's manage Feedbacks</Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Img variant="top" src={env} />
            <Card.Body>
              <Card.Title>Environmental Sustainability</Card.Title>
              <Card.Text>
                Environmental sustainability is crucial for college campuses, but our college currently lacks provisions for it. We need to implement sustainable practices to reduce adverse effects on the environment.
              </Card.Text>
              <Link to='/gogreen' className='btn btn-primary'>Let's manage sustainability</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CarouselSection;
