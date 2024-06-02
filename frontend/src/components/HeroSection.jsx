import React from 'react'
import home from '../assets/Home_page.png'

function HeroSection() {
  return (
    <div> 
      <img className='h-screen w-full' src={home} alt="home" />
    </div>
  )
}

export default HeroSection
