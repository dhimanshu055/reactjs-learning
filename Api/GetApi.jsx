import React, { useState,useEffect } from 'react'

const Get2 = () => {
    const [abc , setabc]  = useState([])


    const Api = () =>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://fakestoreapi.com/products/1", requestOptions)
            .then((response) => response.json())
            .then((result) =>{ 
                setabc([result])
            
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        Api();
    }, [])
    
  return (
    <div>

        <div>
         {
            abc?.map((res)=>{
                return(
                    <h2>{res.title}</h2>,
                    <h5>{res.price}</h5>,
                    <h5>{res.description}</h5>,
                    <h5>{res.category}</h5>
                )
            })
         }
        </div>
    </div>
  )
}

export default Get2