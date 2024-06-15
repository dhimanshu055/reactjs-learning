import React from 'react'
import Second from './Second' 
import img from './Img/download.jpeg'
import vi from '../src/Compo/Video/Video.mp4'
const First = () => {


  const stylesheet ={
    backgroundColor:'red',
    color:'#fff'
  } 
  return (
    <div> 
      <h1>first file </h1>
    <video className='vi' controls muted loop autoPlay src={vi}></video>
      <img src={img} alt=''/>
        <Second st={stylesheet} vi={vi} /> 
    </div>
  )
}

export default First