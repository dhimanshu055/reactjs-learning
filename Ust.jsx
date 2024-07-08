import React, { useEffect, useState } from 'react'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

const Ust = () => {
    const [data, setdata] = useState();
    useEffect(() => {
        setdata(1)
    }, [])

    return (
        <div>



            <div className='m-5 p-5'>

                <div style={{ display: data === 1 ? "block" : "none" }}>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>

                    <button className='btn btn-primary w-100' onClick={() => { setdata(data + 1) }}>Sign Up</button>
                </div>




                {/* login page */1}


                <div style={{ display: data ===2? "block" : "none" }}>
                    <FaRegArrowAltCircleLeft style={{ color: 'red', fontSize: '30px' }} onClick={() => { setdata(data - 1) }} />

                    <div class="mb-3 mt-5">
                        <label for="exampleInputEmail1" class="form-label">Enter name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Enter Password</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>


                    <button className='btn btn-primary w-100' onClick={()=>{setdata(data+1)}} >Login</button>
                </div>

                   {/* login page */2}

                <div style={{ display: data ===3? "block" : "none" }}>
                    <FaRegArrowAltCircleLeft style={{ color: 'red', fontSize: '30px' }} onClick={() => { setdata(data - 1) }} />

                    <div class="mb-3 mt-5">
                        <label for="exampleInputEmail1" class="form-label">Enter name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Enter Password</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>


                    <button className='btn btn-primary w-100' onClick={()=>{setdata(data+1)}} >Login2</button>
                </div>
            </div>


                  {/* login page */3}

            <div style={{ display: data ===4? "block" : "none" }}>
                    <FaRegArrowAltCircleLeft style={{ color: 'red', fontSize: '30px' }} onClick={() =>{ setdata(data - 1) }} />

                    <div class="mb-3 mt-5">
                        <label for="exampleInputEmail1" class="form-label">Enter name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Enter Password</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>


                    <button className='btn btn-primary w-100' >Login3</button>
                </div>
                
                <div/>    
            </div>







)
}




export default Ust