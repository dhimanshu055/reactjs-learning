// // import React from 'react'

// // const Sparta = () => {
// //     const Data={
// //         {
// //             name: 'Himanshu',
// //             age: 23,
// //             gender:'male',
// //             occupation: 'Software Engineer',
// //             // hobbies: ['coding', 'playing games'];
// //             // skills: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'MongoDB', 'MySQL', 'PostgreSQL',


// //     }
// //     return (
// //         <>



// //             <h1>himanshu</h1>
// //             <div class="card">
// //                 {/* <img src="..." class="card-img-top" alt="..."> */}
// //                     <div class="card-body">
// //                         <h5 class="card-title">Card title</h5>
// //                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// //                         <a href="#" class="btn btn-primary">Go somewhere</a>
// //                     </div>
// //             </div>
// //             <div className='container'>
// //                 <div className='row'>

// //                         Data map((card)=>){
// //                             return
// //                         }
// //                     }
// //                     <div className='col-sm-12 col-lg-6 col-md-4'>
// //                         <h1>MY name is HCR</h1>
// //                         <h1>X OPS</h1>

// //                     </div>

// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default Sparta
// import React from 'react'

// const data = () => [{
//     fa: 'himanshu',
//     la:'chandrq'
//     ci:'jaipur'

// },
// ]

// return (

// //     <div className='container mt-5 logo'>

// //       <div className='row'>
// //         {
// //           data.map((table) => {
// //             return (
// //               <div className='col-sm-12 col-lg-6 col-md-4'>
// //                 <table class="table">
// //     <tr>
// //       <th scope="col">#</th>
// //       <th scope="col">First</th>
// //       <th scope="col">Last</th>
// //       <th scope="col">City</th>
// //       <th scope="col">Mail</th>
// //     </tr>
// //   <tbody>
// //     <tr>
// //       <th scope="row">{index+1}</th>
// //       <td>{table.fa}</td>
// //       <td>{table.la}</td>
// //       <td>{table.ci}</td>
// //     </tr>

// //               </div>
// //             )
// //           }
// //           )
// //         }

// //       </div>
// //     </div>

//   )
// }



// export default Sparta

import React from 'react'

const Sparta = () => {
  const data = [
    {
      fa: 'Himanshu chandra',
      la: 'Ops',
      ci: 'jaipur',
      em: 'sprt@gmail.com',
      gt: 'xxxxxxx98',
      st: 'deactivated'

    },
    {
      fa: 'Himanshu chandra',
      la: 'Ops',
      ci: 'jaipur',
      em: 'sprt@gmail.com',
      gt: 'xxxxxxx98',
      st: 'deactivated'

    },
    {
      fa: 'Himanshu chandra',
      la: 'Ops',
      ci: 'jaipur',
      em: 'sprt@gmail.com',
      gt: 'xxxxxxx98',
      st: 'deactivated'

    },
    {
      fa: 'Himanshu chandra',
      la: 'Ops',
      ci: 'jaipur',
      em: 'sprt@gmail.com',
      gt: 'xxxxxxx98',
      st: 'deactivated'

    },
    {
      fa: 'Himanshu chandra',
      la: 'Ops',
      ci: 'jaipur',
      em: 'sprt@gmail.com',
      gt: 'xxxxxxx98',
      st: 'deactivated'

    },
    {
      fa: 'Himanshu chandra',
      la: 'Ops',
      ci: 'jaipur',
      em: 'sprt@gmail.com',
      gt: 'xxxxxxx98',
      st: 'deactivated'

    },
    
  ]
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Serial no </th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">city</th>
            <th scope="col">Email</th>
            <th scope="col">Contect</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((ta,index) => {
              return (
                <tr>
                  <th scope="row">{index +1}</th>
                  <td>{ta.fa}</td>
                  <td>{ta.la}</td>
                  <td>{ta.ci}</td>
                  <td>{ta.em}</td>
                  <td>{ta.gt}</td>
                  <td>{ta.st}</td>
                </tr>
              )
            })
          }

        </tbody>
      </table>




    </>
  )
}

export default Sparta
