import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

function Resources() {
  return (
    <>
    <div className='h-screen w-full bg-gray-100 bg-contain'>
    <div className=' flex items-center justify-center '>
   
    <NavLink to='/upload'>
    <button type="button" className="m-5 h-18 w-auto bg-gray-500 p-3 rounded-full text-white hover:bg-gray-600 font-bold text-[25px] border-4">
 UPLOAD RESOURCES
</button>
    </NavLink>
    </div>
  
    <div className='flex flex-wrap items-center justify-center gap-3 m-5'>
    <NavLink to='/all'>
    <button type="button" className=" h-64 w-64 text-center bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
  ALL RESOURCES
</button>
    </NavLink>
    <NavLink to='/your'>
    <button type="button" className="h-64 w-64 text-center  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
 YOUR RESOURCES
</button>
    </NavLink>
    <NavLink to='/uploaded'>
    <button type="button" className="h-64 w-64 text-center  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
 UPLOADED RESOURCES
</button>
    </NavLink>
    <NavLink to='/lostfound'>
    <button type="button" className="h-64 w-64 text-center  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
LOST AND FOUND
</button>
    </NavLink>
    </div>
    </div>
    </>
  );
}

export default Resources;