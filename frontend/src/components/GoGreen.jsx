import React from 'react'
import green from '../assets/green.jpeg'
import QR from '../assets/QR.jpg'
import {Container} from 'react-bootstrap'
import ReactPlayer from 'react-player';


function GoGreen() {
  return (
    <>
    <div className='bg-[url("https://wallpapercave.com/wp/wp2060641.jpg")] h-screen w-full flex items-center justify-center  bg-green-800 bg-cover p-3 m-auto ' >
      <form className='bg-green-950 bg-opacity-70 shadow-2xl text-white font-bold  p-5 border-4 text-[20px]'>
        <h2 className='p-4 rounded-lg font-bold bg-yellow-500 text-black text-center '>DONATE FOR MOTHER EARTH!</h2>
        <br /><br />
        <label htmlFor="name" >Name : <input type="text" className='text-black text-lg font-normal' /></label><br /><br />
        <label htmlFor="name" >Designation : <select className=' text-black text-lg font-normal' name="designation" >
        <option value="select" >Select</option>
          <option value="student" >Student</option>
          <option value="faculty" >Faculty</option>
          <option value="helper" >Helper</option>
          </select></label><br /><br />
          <label htmlFor="name">Amount donated : <input type="text" className='text-black text-lg font-normal' /></label>
          <br /><br />
          <div>
            <h2 className='font-bold text-[22PX] text-center'>SCAN THE QR TO MAKE A CONTRIBUTION :</h2>
          </div><br />
          <div className='flex items-center justify-center'>
            <img className='h-44 w-44 mr-5' src={QR} alt="greenQR" />
            <button className='bg-yellow-700 p-2 rounded-lg hover:bg-yellow-600 flex items-center justify-center'>Submit</button>
          </div>
          <br />

      </form>  
    </div>
    <div className='bg-[url("https://wallpapercave.com/wp/wp2060641.jpg")] h-screen w-full flex items-center justify-center  bg-green-800 bg-cover p-3 m-auto text-white' >
    <Container className='flex flex-wrap items-center justify-center'>
      
      <div className='player-wrapper flex justify-center items-center gap-5 m-4'>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=jfsWI8XgQyo&ab_channel=BICGroupOfficial"
          controls
          width={400}
          height={300}
        />
         <ReactPlayer
          url="https://www.youtube.com/watch?v=5lrn4CDQZzo&ab_channel=NISTGlobal%3ASafetyCoursesProvider"
          controls
          width={400}
          height={300}
        />
         <ReactPlayer
          url="https://www.youtube.com/watch?v=AIJBG0aGNs8&ab_channel=Marketing91"
          controls
          width={400}
          height={300}
        />
        </div>
        </Container>
      </div>

      <div className='bg-[url("https://wallpapercave.com/wp/wp2060641.jpg")] h-screen w-full flex items-center justify-center  bg-green-800 bg-cover p-3 m-auto text-white' >
    <Container className='flex flex-wrap items-center justify-center'>
      <div className='m-5 p-3'>
    <h1 className='font-bold p-4 m-2 bg-yellow-600 text-black text-[25px] rounded h-12 flex justify-center items-center'>Why Environment Sustainability?</h1>
<p  className='bg-green-950 bg-opacity-70 shadow-2xl text-white font-bold  p-10  text-[20px] mb-10'>Environmental sustainability is a critical concept that focuses on preserving natural resources and ecosystems for future generations. It recognizes the intricate relationship between human activities and the environment, emphasizing the need for responsible stewardship of the planet's resources.

At its core, environmental sustainability aims to maintain the balance between human needs and the Earth's capacity to regenerate resources and absorb waste. This involves adopting practices that minimize environmental impact, reduce waste generation, and promote the efficient use of resources.

One of the key reasons why environmental sustainability is important is its role in safeguarding biodiversity. Ecosystems are complex networks of organisms and their environment, and they provide essential services such as pollination, water purification, and climate regulation. By preserving biodiversity, we ensure the resilience of ecosystems to withstand environmental changes and continue providing these vital services.

Environmental sustainability also plays a crucial role in mitigating climate change. Human activities, such as burning fossil fuels and deforestation, release greenhouse gases into the atmosphere, leading to global warming and climate instability. Sustainable practices, such as transitioning to renewable energy sources and conserving forests, can help reduce these emissions and mitigate the impacts of climate change.


From an economic perspective, environmental sustainability can lead to cost savings and new business opportunities. By reducing energy and resource consumption, businesses can lower operating costs and improve efficiency. Moreover, the shift towards sustainable practices has created new markets for green products and services, stimulating economic growth and job creation.

In conclusion, environmental sustainability is a crucial concept that encompasses the responsible management of natural resources and ecosystems. It is essential for preserving biodiversity, mitigating climate change, protecting human health, and promoting economic growth. By adopting sustainable practices in our daily lives and supporting policies that prioritize environmental protection, we can contribute to a more sustainable future for all.</p>
</div>

    </Container>

    </div>
  
  </>
  );
}

export default GoGreen