import React from 'react';
import { Link } from 'react-router-dom';
import one from '../assets/1.jpeg';
import lib from '../assets/lib.jpg';
import resource from '../assets/resource.jpeg';
import feed from '../assets/feed.jpeg';
import env from '../assets/environment.jpeg';

const cardData = [
  // {
  //   img: one,
  //   title: "Campus Events and Communication",
  //   text: "The campus management lacks organization regarding event sequencing, notification, and management. There is a need for improved event coordination and communication to ensure timely and effective implementation.",
  //   link: "/events",
  //   buttonText: "Let's manage Events",
  // },
  {
    img: lib,
    title: "Campus Resource Optimization",
    text: "The college lacks resource optimization for old books/second-hand books and hardware. There is a need to efficiently manage and repurpose these resources.",
    link: "/resources",
    buttonText: "Let's manage Resources",
  },
  {
    img: resource,
    title: "Automated Library Services",
    text: "The college library lacks online book requests and fine-tracking facilities for students. Implementing these would enable students to request books and view submission deadlines and associated fines conveniently.",
    link: "/library",
    buttonText: "Let's manage Library",
  },
  {
    img: feed,
    title: "Campus Feedback and Improvement",
    text: "Although there is a suggestion box in the college, the college lacks an online feedback system for students, faculty, and staff to provide valuable feedback and suggestions.",
    link: "/feedback",
    buttonText: "Let's manage Feedbacks",
  },
  {
    img: env,
    title: "Environmental Sustainability",
    text: "Environmental sustainability is crucial for college campuses, but our college currently lacks provisions for it. We need to implement sustainable practices to reduce adverse effects on the environment.",
    link: "/gogreen",
    buttonText: "Let's manage sustainability",
  },
];

function CarouselSection() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.img} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{card.text}</p>
              <Link to={card.link} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm block text-center hover:bg-blue-700 transition">
                {card.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselSection;