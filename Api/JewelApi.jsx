import React, { useEffect, useState } from 'react'

const Jewel = () => {
    const [mydata, setdata] = useState([]);

    const getdata = ()=>{

        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://fakestoreapi.com/products/category/jewelery", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setdata([result]) 

            })
            .catch((error) => console.error(error));




    }

    useEffect(()=>{
        getdata()

    },[])
  return (
    <div>

        <div className='container'>
            <div className='row'>
                {
                    mydata?.map((res)=>{
                        <div className='col-sm-12 col-md-12 col-lg-4'>
                            <div className='card-body'>
                                <img src={res.image} style={{width:'5px'}}/>
                                <h1>{res.id}</h1>
                                <h2>{res.title}</h2>
                                <h2>{res.price}</h2>



                            </div>

                        </div>

                    })
                }

            </div>
        </div>


    </div>
  )
}

export default Jewel