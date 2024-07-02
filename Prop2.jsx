import React from 'react'
import Third from './Prop3';
import img from './Img/download.jpeg'
// import vi from '../src/Compo/Video/Video.mp4'



const Second = ({st,vi}) => {
  return (
    <div>
        <h1 style={st}>My name is :Himanshu</h1> 
        <img src={img} alt=''/>
       <Third style={st} vi={vi} />
    <video className='vi' controls muted loop autoPlay src={vi}></video>

    </div>
  )
}

export default Second;