import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from '../assets/placeholder.png'

const Sidebar = () => {
  return (
    <div className='bg-blue-100 h-screen p-3'>
    <div className="p-4 ">
         <h2 className=" text-2xl font-bold mb-4">Bus Details</h2>
      <div className="space-y-2">
        <p><strong>Bus Number:</strong>1426</p>
        <p><strong>Bus Route:</strong> City-Mini bypass</p>
      </div>
      <h2 className="mt-5 text-2xl font-bold mb-4">Driver Details</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> Guddu Bhaiya</p>
        <p><strong>Contact:</strong> 1234567890</p>
      </div>
      <h2 className="mt-5 text-2xl font-bold mb-4">Bus Incharge</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> Bablu Bhaiya</p>
        <p><strong>Contact:</strong> 1234567890</p>
      </div>
      
    </div>
    </div>
  );
};

const MapView = () => {

    const icons=new Icon({
       iconUrl:"https://i.pinimg.com/474x/3d/f0/ae/3df0aef6c5d3fae307eb52eb7a2e9fde.jpg",
       iconSize:[50,50]
    })

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className="h-screen w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]} icon={icons}>
        <Popup>
          Driver is here.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const Track = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-200">
        <Sidebar />
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4">
        <MapView />
      </div>
    </div>
  );
};

export default Track;
