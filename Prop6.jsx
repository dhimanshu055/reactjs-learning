import React from 'react'
import Seven from './Seven'
import img from './Img/download.jpeg'


const Sixth = ({d},vi) => {
  return (
    <div>Sixth
        <h1 style={d}>My School : Sps</h1>
        <Seven e ={d} vi={vi}/>
        <img src={img} alt=''/>
        <video className='vi' controls muted loop autoPlay src={vi}></video>
        
    </div>
  )
}

export default Sixth