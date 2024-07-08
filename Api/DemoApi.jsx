import React, { useState,useEffect } from 'react'

const DemoGet = () => {

    const [mydata , setdata] = useState([]);
    const data =[
        {
   name:'Hello'
    },
        {
   name:'Hello'
    },  
        {
   name:'Hello'
    },
]


const getdata = ()=>{
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://fakestoreapi.com/products", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setdata(result)
        })
        .catch((error) => console.error(error));
}
useEffect(() => {
    getdata()
}, [])

  return (
    <div>
        

        <div className='container mt-5'>
            <div className='row'>

                {
                    mydata?.map((res)=>{
                        return(
                    <div className='col-lg-4 col-md-6 col-sm-12'> 
                    <div className='card '>
                        <div className='card-body'>
                            <h5> Title : {res.title}</h5>
                            <h5> price: {res.price}</h5>
                            <h5>{res.description}</h5>
                            <h5>{res.category}</h5>
                            <h5>{res.rating.rate}</h5>
                            <h5>{res.rating.count}</h5>
                            <img src={res.image} style={{width:'50px'}}/>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default DemoGet