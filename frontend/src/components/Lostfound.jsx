import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

function Lostfound() {
  return (
    <>
    <div className='h-screen   bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIMxtuXgVS1otFyiowu9NQmlMx4v3sSOjsg&s")] w-full bg-contain'>
    <div className=' flex items-center justify-center '>
   
    <NavLink to='/uploadlost'>
    <button type="button" className="m-5 h-18 w-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-3  rounded-full text-black font-bold text-[25px] border-4">
 Upload lost item request
</button>
    </NavLink>
    <NavLink to='/uploadfound'>
    <button type="button" className="m-5 h-18 w-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-3  rounded-full text-black font-bold text-[25px] border-4">
 Upload found item 
</button>
    </NavLink>
    </div>
  
    <div className='flex flex-wrap items-center justify-center gap-3 m-5'>
    
    <NavLink to='/lost'>
    <button type="button" className="h-64 w-64 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
 LOST
</button>
    </NavLink>
    <NavLink to='/found'>
    <button type="button" className="h-64 w-64 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
FOUND
</button>
    </NavLink>
    </div>
    </div>
    </>
  );
}

export default Lostfound;