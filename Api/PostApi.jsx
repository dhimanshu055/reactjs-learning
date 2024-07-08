import React, { useState } from 'react'


const Post = () => {
    const[username, setusername]= useState();
    const[password, setPassword]= useState();
    
    

    const login = ()=>{
        const myHeaders = new Headers(); 
        
        const formdata = new FormData();
        formdata.append("username", username);
        formdata.append("password", password);
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow"
        };
        
        fetch("https://dummyjson.com/auth/login", requestOptions)
          .then((response) => response.json())
          .then((result) =>
           console.log(result,'khbbkkbb'))
          .catch((error) =>
           console.error(error));
        

    }
 

                            return(
                                <div>
<input type="email"  value={username} placeholder="" id="email" 
onChange={(e)=>{setusername(e.target.value)}}/>

<input type="password" value={password} placeholder="" id="pass" 
onChange={(e)=>{setPassword(e.target.value)}}/>

<button type="submit" onClick={()=>{login()}} >login</button>

</div>

                              



                            




                            )
                        




                    }




            



export default Post