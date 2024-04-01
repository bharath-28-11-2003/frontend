import React, { useContext, useState ,useRef} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext';
import nav_menu_icon from '../Assets/nav_menu_icon.png';
 const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');

  }
  return (
    <div className="navbar">
      
    <div className="nav-logo">
      <img src={logo} alt="" />
      <p>AJIO LUXURE</p>
      </div>
    <img className='nav-dropdown'onClick={dropdown_toggle}src={nav_menu_icon} alt=''/>
  <ul ref={menuRef} className="nav-menu">
    <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to ='/' >Shop</Link> {menu==="Shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}to ='/mens' >Men</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}}to ='/womens' >Women</Link>{menu==="womens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}}to ='/kids' >Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
  </ul>
  <div className='nav-login-cart'>
    {localStorage.getItem('auth-token')
    ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
  :<Link to ='/login'><button>Login</button></Link>}
    
    <Link to ='/cart'><img src={cart_icon} alt ="" /></Link>
    <div className='nav-cart-count'>{getTotalCartItems()}</div>
  </div>
</div>
    
    
  )
}

export default Navbar;
