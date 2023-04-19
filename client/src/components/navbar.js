import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const NavBar = ()=>{
  const navigate=useNavigate()
  const {state,dispatch}=useContext(UserContext)
  const renderList =()=>{
    if(state){
      return[
        <li><Link to="/Profile">profile</Link></li>,
        <li><Link to="/createPost">add post</Link></li>,
        <li><button className='btn #ef5350 red lighten-1' onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          navigate('/Signin')
        }}>logout</button></li>
      ]
    }else{
      return[
        <li><Link to="/Signin">login</Link></li>,
        <li><Link to="Signup">signup</Link></li>
      ]
    }
  }
    return(
<nav>
  <div className="nav-wrapper white">
    <Link to={state?"/":"/Signin"} className="brand-logo left">Trendogram</Link>
    <ul id="nav-mobile" className="right">
      {renderList()}
    </ul>
  </div>
</nav>
    )
}

export default NavBar;