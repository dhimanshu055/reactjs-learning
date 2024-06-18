import React from 'react'
import Fifth from './Fifth'
import img from './Img/download.jpeg'
// import vi from '../src/Compo/Video/Video.mp4'

const Fourth = ({a,vi}) => {
  return (
    <div>Fourth
        <h1 style={a}>ankit</h1>
        <Fifth b= {a} vi={vi}></Fifth>
        <img src={img} alt=''/>
        <video className='vi' controls muted loop autoPlay src={vi}></video>
    </div>
  )
}

export default Fourth