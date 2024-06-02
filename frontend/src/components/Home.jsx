import React,{useEffect} from 'react'
import HeroSection from './HeroSection'
import CarouselSection from './CarouselSection'
import QueryForm from './QueryForm'
import Video from './Video'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div>
      <HeroSection />
      <br /><br />
      <CarouselSection />
      <br /><br />
      <Video/>
      <br /><br />
      <QueryForm />
      <br /><br />
    </div>
  )
}

export default Home;
