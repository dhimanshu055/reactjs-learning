import React, { useEffect, useState } from 'react'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

const Sign = () => {
    const[data,setdata]= useState();

    
    useEffect(()=>{
        setdata(1)
    },[])
  return (

    <div className='m-5 p-5'>

    <div style={{display:data === 1?"block":"none"}}>

    <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
</div>
    <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
</div>


<button type="button" class="btn btn-success"  onClick={()=>{setdata(data + 1)}}>Success</button>
    </div>




<div style={{display:data === 2 ? "block":"none"}}>
    <FaRegArrowAltCircleLeft  style={{color:'red', fontSize:'30px'}} onClick={()=>{setdata(data-1)}}/>

    <div class="mb-3 mt-5">
  <label for="exampleInputEmail1" class="form-label">Enter name</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
</div>
    <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Enter Password</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/> 
</div>


<button type="button" class="btn btn-info">Login</button>
    </div>
   </div>
 )
}
   

export default Sign