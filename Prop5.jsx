import React from 'react'
import Sixth from './Sixth'
import img from './Img/download.jpeg'

const Fifth = ({b,vi}) => {
  return (
    <div>Fifth
        <h1 style={b}>My company: RR</h1>
        <Sixth d={b} vi={vi}/>
        <img src={img} alt=''/>
        <video className='vi' controls muted loop autoPlay src={vi}></video>
    </div>
  )
}

export default Fifth