import React from 'react'
import Fourth from './Fourth'
import img from './Img/download.jpeg'
// import vi from '../src/Compo/Video/Video.mp4'

const Third = ({style,vi}) => {
  return (
    <div>Third
        <h1 style={style}>My unit is :RR</h1>
        <img src={img} alt=''/>
        <Fourth a = {style} vi={vi}/>
        <video className='vi' controls muted loop autoPlay src={vi}></video>
    </div>
  )
}

export default Third