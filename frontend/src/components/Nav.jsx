import React, { useState, useEffect } from 'react';
import { GiFruitTree } from 'react-icons/gi';
import logo from '../assets/logo.png';
import { Link, NavLink,useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

function Nav() {
  const navigate=useNavigate()
  const location = useLocation();
  const [isGoGreenSection, setIsGoGreenSection] = useState(false);

  useEffect(() => {
    setIsGoGreenSection(location.pathname === '/gogreen');
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login')
    toast.error('Logged out')
  };

  return (
    <nav className={`w-full flex flex-wrap justify-between items-center top-0 ${isGoGreenSection ? 'bg-green-700' : 'bg-gray-700'}`}>
      <Link to='/'>
        <img className='h-32 object-contain' src={logo} alt='logo' />
      </Link>
      <div className='flex md:hidden'>
        <button className='text-4xl font-bold text-white' onClick={() => setIsOpen(!isOpen)}>
          &#8801;
        </button>
      </div>
      <div className='flex md:flex w-full md:w-auto'>
        <ul className='text-white font-semibold md:flex flex-col md:flex-row gap-5 text-[18px] w-full'>
          <li>
            <NavLink 
              to="/" 
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  hover:text-white  hover:border-white cursor-pointer`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  hover:text-white  hover:border-white cursor-pointer`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/resources"
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  hover:text-white  hover:border-white cursor-pointer`
              }
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/library"
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  hover:text-white  hover:border-white cursor-pointer`
              }
            >
              Library
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/events"
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  hover:text-white  hover:border-white cursor-pointer`
              }
            >
              Events
            </NavLink>
          </li>
          {/* <li>
            <a href="http://localhost:3001">Events</a>
          </li> */}
          <li>
            <NavLink 
              to="/feedback"
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  hover:text-white  hover:border-white cursor-pointer`
              }
            >
              Feedback
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/navigation"
              className={({ isActive }) =>
                `${isActive ? "bg-blue-900 p-2" : "text-slate-300"} hover:text-white hover:border-white cursor-pointer`
              }
            >
              Navigation
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gogreen"
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  text-green-400 font-bold border-2 border-green-400 p-1 hover:text-white hover:bg-green-600 cursor-pointer rounded-md flex`
              }
            >
              <GiFruitTree size='1.5em' />
              GoGreen
            </NavLink>
          </li>
        </ul>
      </div>
      {!localStorage.getItem('auth') ? (
        <NavLink to='/login' className='hidden md:flex bg-slate-500 p-2 rounded-lg text-white font-bold border-2 hover:text-blue-950 cursor-pointer hover:border-2 hover:border-slate-400 mr-2'>
          Signin/Signup
        </NavLink>
      ) : (
        <Button onClick={handleLogout} className='hidden md:flex bg-slate-500 p-2 rounded-lg text-white font-bold border-2 hover:text-blue-950 cursor-pointer hover:border-2 hover:border-slate-400 mr-2'>
          Logout
        </Button>
      )}
    </nav>
  );
}

export default Nav;

{/* <NavLink 
              to="/events"
              className={({isActive})=>
                ` ${isActive? "bg-blue-900 p-2": "text-slate-300"}  hover:text-white  hover:border-white cursor-pointer`
              }
            >
              Events
            </NavLink> */}
