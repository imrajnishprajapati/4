import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      
<div className=""> 
<div className="flex">
<div className="">
  <ul>
    <li> <NavLink to='/' > Home </NavLink> </li>
    <li> <NavLink to='/about' > about </NavLink> </li>
    <li> <NavLink to='/componants' > componants </NavLink> </li>
    <li> <NavLink to='/gallery' > gallery </NavLink> </li>
  </ul>

</div>
  
</div>
</div>







    </>
  )
}

export default Header;
