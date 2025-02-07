import React from 'react'
import home from '../assets/Home_page.png'
import '../index.css';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  const images = [
    '/card1.png', 
    '/card2.png', 
    '/card3.png', 
    '/card4.png', 
    '/card5.png', 
    '/card6.png', 
    
    
  ];
  return (
    // <div> 
    //   <img className='h-screen w-full' src={home} alt="home" />
    // </div>
    <>
    <div className='flex mb-10'>

  
    <div className="flex flex-1 h-[80vh] p-10">
    <div className="relative w-96 h-96">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute top-1/2 left-1/2 transform flower-petal"
          style={{
            transform: `rotate(${index * 60}deg) translate(180px) rotate(-${index * 60}deg)`
          }}
        >
          <img src={src} alt={`flower-petal-${index}`} className="w-56 h-48 rounded-full" />
        </div>
      ))}
    </div>
  </div>




<div className='flex flex-1 justify-center items-center'>
  <div>
    <img className='ml-40 h-60 w-52 text-center' src="/campusLogo.png" alt="" />
<h1 className='font-bold text-blue-950 text-4xl tracking-[10px]'>Innovating Solutions</h1>
  <h1 className='mt-3 font-semibold text-2xl text-blue-900 '>Discover innovation revolutionarizing campus life!</h1>
  <div className='mt-4 text-3xl text-black text-center'>
  <Typewriter
            words={['Event Management','Resource Optimization','Environmental sustainability','Library management','Feedback/Grievances','Campus Navigation','Bus Location Tracking']}
            loop={5}
            cursor
            cursorStyle='/'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
          </div>
         
</div>
</div>
</div>

  </>
  )
}

export default HeroSection

