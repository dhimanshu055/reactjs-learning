import React, { useMemo, useState } from 'react'

const Memo = () => {
  const [plus, setplus]=useState(0);
  const [minus, setminus]=useState(1000);

    const mlt= useMemo(()=>{
        console.log();
        return plus *10

    },[plus])       


  return (
    <div className='p-5 m-5' >
      <h1>{plus}</h1>{mlt}
      <button onClick={()=>{setplus(plus+1)}} >plus</button><br/>
      <button onClick={()=>{setminus(plus-1)}} >minus</button>
    </div>
  )
}

export default Memo