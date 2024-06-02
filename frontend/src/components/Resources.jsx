import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'

function Resources() {
  return (
    <>
    <div className='h-screen   bg-[url("https://img.freepik.com/premium-psd/seo-business-annual-report-with-isometric-optimazion_737962-19.jpg?size=626&ext=jpg&ga=GA1.1.7539172.1714749172&semt=ais")] w-full bg-contain'>
    <div className=' flex items-center justify-center '>
   
    <NavLink to='/upload'>
    <button type="button" className="m-5 h-18 w-auto bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-3 m-3 rounded-full text-black font-bold text-[25px] border-4">
 UPLOAD RESOURCES
</button>
    </NavLink>
    </div>
  
    <div className='flex flex-wrap items-center justify-center gap-3 m-5'>
    <NavLink to='/all'>
    <button type="button" className=" h-64 w-64 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
  ALL RESOURCES
</button>
    </NavLink>
    <NavLink to='/your'>
    <button type="button" className="h-64 w-64 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
 YOUR RESOURCES
</button>
    </NavLink>
    <NavLink to='/uploaded'>
    <button type="button" className="h-64 w-64 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
 UPLOADED RESOURCES
</button>
    </NavLink>
    <NavLink to='/lostfound'>
    <button type="button" className="h-64 w-64 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-5 rounded-lg text-black font-bold text-[25px] border-4">
LOST AND FOUND
</button>
    </NavLink>
    </div>
    </div>
    </>
  );
}

export default Resources;