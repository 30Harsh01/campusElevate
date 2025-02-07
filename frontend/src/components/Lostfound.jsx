import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

function Lostfound() {
  return (
    <>
    <div className='h-screen w-full bg-contain'>
    <div className=' flex items-center justify-center '>
   
    <NavLink to='/uploadlost'>
    <button type="button" className="m-5 h-18 w-auto  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-3  rounded-full text-black font-bold text-[25px] border-4">
 Upload lost item request
</button>
    </NavLink>
    <NavLink to='/uploadfound'>
    <button type="button" className="m-5 h-18 w-auto  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-3  rounded-full text-black font-bold text-[25px] border-4">
 Upload found item 
</button>
    </NavLink>
    </div>
  
    <div className='flex flex-wrap items-center justify-center gap-3 m-5'>
    
    <NavLink to='/lost'>
    <button type="button" className="h-64 w-64 text-center  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
 LOST
</button>
    </NavLink>
    <NavLink to='/found'>
    <button type="button" className="h-64 w-64 text-center  bg-gradient-to-r from-gray-500 via-blue-700 to-gray-400 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
FOUND
</button>
    </NavLink>
    </div>
    </div>
    </>
  );
}

export default Lostfound;