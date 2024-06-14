import React from 'react'

const Hello = () => {
  const data = [
    
    {
      head: 'MY name is HCR',
      status: 'X OPS',
      native:"Punjab",
      unit:"RR",
      report:"chief",
      id:"Delta",
      code:"DHCR55",

    },
    
    
      
    
  ]
  return (

    <div className='container mt-5 logo'>

      <div className='row'>
        {
          data.map((card) => {
            return (
              <div className='col-sm-12 col-lg-6 col-md-3'>
                <h1>{card.head}</h1>
                <h2>{card.status}</h2>
                <h3>{card.native}</h3>
                <h4>{card.unit}</h4>
                <h4>{card.report}</h4>
                <p>{card.id}</p>
                <h3>{card.code}</h3>

              </div>
            )
          }
          )
        }

      </div>
    </div>

  )
}








export default Hello

