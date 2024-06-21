import React from 'react'
import Eighth from './Eighth'
import img from './Img/download.jpeg'

const Seven = ({e},vi) => {
  return (
    <div>Seven
        <h1 style={e}>My training : Chandigarh</h1>
        <Eighth f={e} vi={vi}/>
        <img src={img} alt=''/>
        <video className='vi' controls muted loop autoPlay src={vi}></video>
        
    </div>
  )
}

export default Seven