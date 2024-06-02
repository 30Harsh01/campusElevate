import React from 'react'
import './App.css'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import CarouselSection from './components/CarouselSection'
import Carousel from 'react-bootstrap/Carousel';
// import Video from './components/Video'
import 'bootstrap/dist/css/bootstrap.min.css';
import QueryForm from './components/QueryForm';
import FootElement from './components/FootElement'
import {Toaster} from 'react-hot-toast'




function App() { 

  return (
    <>
    <Nav />
       <HeroSection />
       <br/><br />
     <CarouselSection/>
      <br /><br/>
      {/* <Video/> */}
      <br /><br />
      <QueryForm/>
      <br /> <br />
     </>
  )
}

export default App
