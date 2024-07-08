import React from 'react'
import Ninth from './Ninth'
import img from './Img/download.jpeg'

const Eighth = ({f},vi) => {
  return (
    <div>Eighth
        <h1 style={f}>MY native: Punjab</h1>
        <Ninth g={f} vi={vi}/>
        <img src={img} alt=''/>
        <video className='vi' controls muted loop autoPlay src={vi}></video>
    </div>
  )
}

export default Eighth