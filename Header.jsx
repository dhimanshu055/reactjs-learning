import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <ul style={{display:'flex', justifyContent:'space-around',fontSize:'32px'}}>
          <NavLink to="/">  <li>Home</li> </NavLink>
          <NavLink to="/b">  <li>About</li> </NavLink>
          <NavLink to="/c">  <li>Log</li> </NavLink>
          
            
        </ul>
    </div>
  )
}

export default Header



