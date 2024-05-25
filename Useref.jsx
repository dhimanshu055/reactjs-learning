import React,{useRef, useState} from 'react'

const Useref = () => {
    const [data,setData]= useState('pankaj');

    const RefText= useRef();
    console.log(RefText,"Hello");


    const Refresh = ()=>{
        setData(' ')
        RefText.current.focus()
    }
    const Update =()=>{
      
        RefText.current.value="himanshu"
        RefText.current.style.color="red"
    }


  return (
    <div className='p-5'>Useref
    <h1>Hello</h1>
        <input type='text'ref={RefText} value={data} onChange={(e)=>{setData(e.target)}}></input>

        <button onClick={()=>{Refresh()}} >Click</button>
        <button onClick={()=>{Update()}} >Update</button>
    </div>
  )
}

export default Useref;