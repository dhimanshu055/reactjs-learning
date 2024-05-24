
import React, {useState} from 'react'
import { baseUrl } from './Url';

const RegApi = () => {

    const [email, setEmail] = useState(""); 
    const [pass, setPassword] = useState(""); 

  const register = async() => {
    try {

      
    const myHeaders = new Headers()
    myHeaders.append("Content-Type","application/json")
     const raw = JSON.stringify({
        "email":email,
        "password":pass
     })

      const requestOptions = {
        method: 'POST',
        headers : myHeaders,
        redirect: 'follow',
        body : raw
      };

      const res = await fetch(`${baseUrl}/learner/register`, requestOptions);

      const result = await res.json();

      // if (result?.status === '001') {
      //   setData(result?.message);
      //   setEmail("")
      //   setPassword("")
      //   console.log('res', result);
      // } else {
      //   alert('Error occurred');
      // }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

 





  
  return (
    <div>
        <input type = 'text' value = {email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type = 'text' value = {pass} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={register} ></button>
    </div>
  )
}

export default RegApi