import React from 'react'
// import img from './Img/download.jpeg'

const Tenth = ({h},vi) => {
  return (
    <div>Tenth
       <h1 style={h}> My spes: 3 ard rr 55 </h1>
       <h1 style={h}>2024</h1>
       {/* <img src={img} alt=''/> */}
        <video className='vi' controls muted loop autoPlay src={vi}></video>
    </div>
  )
}

export default Tenth