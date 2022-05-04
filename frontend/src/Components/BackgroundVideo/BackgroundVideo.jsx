import React from 'react';
import videoBg from '../Assets/videoBg.mp4';
import rainbow from '../Assets/rainbowBg.mp4'

const BackgroundVideo = () => {
  return (
    <div classname="bg">
        <div className='overlay'></div>
        <video src={rainbow} autoPlay loop muted />
        <div className='content' >
            <h1>Welcome</h1>
            <p>To my site</p>
        </div>

    </div>
  )
}

export default BackgroundVideo