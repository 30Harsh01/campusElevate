import React from 'react'
import {Container} from 'react-bootstrap'
import ReactPlayer from 'react-player';
import proposal_video from '../assets/proposal_video.mp4'

function Video() {
  return (
   <Container className='flex flex-wrap items-center justify-center'>
      
   

<div className='m-5 p-3'>
    <h1 className='font-bold text-lg m-2 bg-blue-950 text-white rounded h-12 flex justify-center items-center'>Proposed Solutions for Smart Campus</h1>
<p>The proposed solutions encompass a holistic approach to enhance campus functionality and student engagement. A new website section will centralize campus events and communication, promoting a vibrant campus community. Campus resource optimization includes sections for lost and found items, buying/selling second-hand goods, and borrowing hardware. Automated library services will offer real-time book updates and personalized alerts. A feedback portal will facilitate student input for continuous improvement. Environmental sustainability initiatives aim to educate and engage the community in greening the campus.</p>
<div className='player-wrapper mt-10 flex justify-center items-center'>
      <ReactPlayer
        url={proposal_video}
        controls
        width='50%'
        height='50%'
      />
    </div>
</div>
   </Container>
  )
}

export default Video



