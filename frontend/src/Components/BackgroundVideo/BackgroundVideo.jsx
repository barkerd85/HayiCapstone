import React from 'react';
import weddingStock from '../Assets/weddingStock.mp4';


const BackgroundVideo = () => {
  return (
    <div classname="bg">
        <div className='overlay'></div>
        <video src={weddingStock} autoPlay loop muted />
        <div className='content' >
        </div>
</div>
  )
}

export default BackgroundVideo    
        
    