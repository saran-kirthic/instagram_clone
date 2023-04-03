import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ()=>{
    return(
<nav>
  <div className="nav-wrapper white">
    <Link to="/" className="brand-logo left">Sk's-Instagram</Link>
    <ul id="nav-mobile" className="right">
      <li><Link to="/Signin">login</Link></li>
      <li><Link to="Signup">signup</Link></li>
      <li><Link to="/Profile">profile</Link></li>
    </ul>
  </div>
</nav>
    )
}

export default NavBar;