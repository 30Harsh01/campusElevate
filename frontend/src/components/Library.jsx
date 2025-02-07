import React from 'react'

import {NavLink} from 'react-router-dom'


function Library() {
  return (
    <div className='bg-gray-100'>
     {/* <div className='bg-[url("https://wallpapercave.com/wp/wp2060641.jpg")] h-screen w-full flex items-center justify-center  bg-green-300 bg-cover p-3 m-auto ' ></div> */}
     
    <div className=' flex items-center  justify-center h-screen w-full bg-contain '>
    <NavLink to='/request'>
    <button type="button" className="mr-20  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ...   p-20 rounded-lg text-black font-bold text-[25px] border-4">
  GENERATE ISSUE REQUEST
</button>
    </NavLink>
    <NavLink to='/status'>
    <button type="button" className=" bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ...  p-20 rounded-lg text-black font-bold text-[25px] border-4">
  VIEW STATUS
</button>
    </NavLink>
    </div>
    </div>
  )
}

export default Library