import React from 'react';
import green from '../assets/green.jpeg';
import QR from '../assets/QR.jpg';
import { Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';

function GoGreen() {
  return (
    <>
      <div className='bg-cover bg-center min-h-screen flex items-center justify-center p-4' style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2060641.jpg')" }}>
        <form className='bg-green-950 bg-opacity-80 shadow-xl text-white font-bold p-6 border-4 rounded-lg w-full max-w-md'>
          <h2 className='p-4 rounded-lg font-bold bg-yellow-500 text-black text-center text-xl'>DONATE FOR MOTHER EARTH!</h2>
          <div className='mt-4'>
            <label className='block mb-2'>Name:</label>
            <input type='text' className='w-full p-2 text-black text-lg font-normal rounded-lg' />
          </div>
          <div className='mt-4'>
            <label className='block mb-2'>Designation:</label>
            <select className='w-full p-2 text-black text-lg font-normal rounded-lg'>
              <option value='select'>Select</option>
              <option value='student'>Student</option>
              <option value='faculty'>Faculty</option>
              <option value='helper'>Helper</option>
            </select>
          </div>
          <div className='mt-4'>
            <label className='block mb-2'>Amount donated:</label>
            <input type='text' className='w-full p-2 text-black text-lg font-normal rounded-lg' />
          </div>
          <div className='mt-6 text-center'>
            <h2 className='font-bold text-xl'>SCAN THE QR TO MAKE A CONTRIBUTION:</h2>
          </div>
          <div className='flex flex-col items-center justify-center mt-4'>
            <img className='h-44 w-44 mb-4' src={QR} alt='greenQR' />
            <button className='bg-yellow-700 hover:bg-yellow-600 p-3 rounded-lg text-lg transition'>Submit</button>
          </div>
        </form>
      </div>
      
      <div className='bg-cover bg-center min-h-screen flex items-center justify-center p-4 text-white' style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2060641.jpg')" }}>
        <Container className='flex flex-wrap justify-center gap-6'>
          {["https://www.youtube.com/watch?v=jfsWI8XgQyo&ab_channel=BICGroupOfficial", 
            "https://www.youtube.com/watch?v=5lrn4CDQZzo&ab_channel=NISTGlobal%3ASafetyCoursesProvider", 
            "https://www.youtube.com/watch?v=AIJBG0aGNs8&ab_channel=Marketing91"].map((url, index) => (
            <ReactPlayer key={index} url={url} controls width='100%' height='250px' className='max-w-sm' />
          ))}
        </Container>
      </div>

      <div className='bg-cover bg-center min-h-screen flex items-center justify-center p-4 text-white' style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp2060641.jpg')" }}>
        <Container className='max-w-3xl'>
          <div className='text-center mb-6'>
            <h1 className='font-bold p-4 bg-yellow-600 text-black text-xl rounded-lg'>Why Environment Sustainability?</h1>
          </div>
          <p className='bg-green-950 bg-opacity-80 shadow-2xl text-white font-bold p-6 rounded-lg text-lg'>
            Environmental sustainability is a critical concept that focuses on preserving natural resources and ecosystems for future generations. It recognizes the intricate relationship between human activities and the environment, emphasizing the need for responsible stewardship of the planet's resources.
            <br /><br />
            At its core, environmental sustainability aims to maintain the balance between human needs and the Earth's capacity to regenerate resources and absorb waste. This involves adopting practices that minimize environmental impact, reduce waste generation, and promote the efficient use of resources.
            <br /><br />
            One of the key reasons why environmental sustainability is important is its role in safeguarding biodiversity. Ecosystems are complex networks of organisms and their environment, and they provide essential services such as pollination, water purification, and climate regulation. By preserving biodiversity, we ensure the resilience of ecosystems to withstand environmental changes and continue providing these vital services.
            <br /><br />
            Environmental sustainability also plays a crucial role in mitigating climate change. Human activities, such as burning fossil fuels and deforestation, release greenhouse gases into the atmosphere, leading to global warming and climate instability. Sustainable practices, such as transitioning to renewable energy sources and conserving forests, can help reduce these emissions and mitigate the impacts of climate change.
            <br /><br />
            From an economic perspective, environmental sustainability can lead to cost savings and new business opportunities. By reducing energy and resource consumption, businesses can lower operating costs and improve efficiency. Moreover, the shift towards sustainable practices has created new markets for green products and services, stimulating economic growth and job creation.
            <br /><br />
            In conclusion, environmental sustainability is a crucial concept that encompasses the responsible management of natural resources and ecosystems. It is essential for preserving biodiversity, mitigating climate change, protecting human health, and promoting economic growth. By adopting sustainable practices in our daily lives and supporting policies that prioritize environmental protection, we can contribute to a more sustainable future for all.
          </p>
        </Container>
      </div>
    </>
  );
}

export default GoGreen;
