import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {NavLink} from 'react-router-dom'


function Navigation() {
  return (
    <div>
    <div className='text-center bg-[url("https://media.istockphoto.com/id/1708195462/vector/isometric-gps-map-navigation-to-house-view-from-above-map-buildings-detailed-view-of-city.jpg?s=612x612&w=0&k=20&c=dCostOFgoUHztrKr7Jw56gOxukaAuTA5tMpSWN-BwoU=")] bg-no-repeat bg-cover h-screen w-full  '>
    <div>
<div className=' text-5xl font-bold '>
    <div className='flex items-center justify-center p-5 '>
        <h1 className='text-black'>Track {' '}
        <span className='text-blue-800'>
    <Typewriter 
            words={['Bus Location', 'Bus Route']}
            cursor
            loop={0}
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span>
          </h1>
          </div>
          </div>
          
    </div>
    <div className='flex justify-center items-center mt-20'>
    <NavLink to='/navitable'>
    <button type="button" className="bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ...  p-3 rounded-lg mt-32 text-black font-bold text-[25px] border-2 border-gray-700">
  Track College Bus
</button>
    </NavLink> 
    </div> 
    </div>
   
    </div>
  )
}

export default Navigation