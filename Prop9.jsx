import React from 'react'
import Tenth from './Tenth'
import img from './Img/download.jpeg'

const Ninth = ({g},vi) => {
  return (
    <div>Ninth
        <h1 style={g}>My exper: 47 slr mmg lmg 9mm </h1>
        <Tenth h={g} vi={vi}/>
        <img src={img} alt=''/>
        <video className='vi' controls muted loop autoPlay src={vi}></video>
    </div>
  )
}

export default Ninth