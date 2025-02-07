import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import {NavLink} from 'react-router-dom'


function Navigation() {
  return (
    <div>
    <div className='text-center bg-[url("https://t4.ftcdn.net/jpg/02/43/11/85/360_F_243118595_69w58kvRFGA6rqKaFCBnbaY9o8bSiWPe.jpg")] bg-no-repeat bg-cover h-screen w-full  '>
    <div>
<div className=' text-5xl font-bold '>
    <div className='flex items-center justify-center p-5 '>
        <h1 className='text-white'>Track {' '}
        <span className='text-yellow-200'>
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
    <button type="button" className="bg-gradient-to-r  text-center from-green-400 to-blue-500  p-3 rounded-lg mt-32 text-black font-bold text-[25px] border-4">
  Track College Bus
</button>
    </NavLink> 
    </div> 
    </div>
   
    </div>
  )
}

export default Navigation