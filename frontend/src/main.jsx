import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import CarouselSection from './components/CarouselSection.jsx'
import Resources from './components/Resources.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Library from './components/Library.jsx'
import Events from './components/Events.jsx'
import Feedback from './components/Feedback.jsx'
import GoGreen from './components/GoGreen.jsx'
import SignUp from './components/SignUp.jsx'
import LoginPage from './components/LoginPage.jsx'
import Status from './components/Status.jsx'
import Request from './components/Request.jsx'
import All from './components/All.jsx'
import Uploaded from './components/Uploaded.jsx'
import Your from './components/Your.jsx'
import Lostfound from './components/Lostfound.jsx'
import UploadR from './components/UploadR.jsx'
import Uploadlost from './components/Uploadlost.jsx'
import Uploadfound from './components/Uploadfound.jsx'
import Lost from './components/Lost.jsx'
import Found from './components/Found.jsx'
// import Layout1 from './Layout1.jsx'
// import ResourceRender from './components/ResourceRender.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/library" element={<Library/>} />
      <Route path="/resources/" element={<Resources/>} />
     
      {/* <Route path="./components/event" element={<Event/>} /> */}
      <Route path="/event" element={<Event/>} />
      <Route path="/feedback" element={<Feedback/>}/>
       <Route path="/gogreen" element={<GoGreen/>} />
       <Route path="/signup" element={<SignUp/>} />
       <Route path='/login' element={<LoginPage/>} />
       <Route path="/status" element={<Status/>} />
       <Route path="/request" element={<Request/>} />
       <Route path="/events" element={<Events/>} />
       <Route path="/all" element={<All/>}/>
       <Route path="/uploaded" element={<Uploaded/>}/>
       <Route path="/lostfound" element={<Lostfound/>}/>
       <Route path="/your" element={<Your/>}/>
       <Route path="/upload" element={<UploadR/>}/>

       <Route path="/uploadlost" element={<Uploadlost/>}/>
       <Route path="/uploadfound" element={<Uploadfound/>}/>
       <Route path="/lost" element={<Lost/>}/>
       <Route path="/found" element={<Found/>}/>
      </Route>
      
  )
 )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)