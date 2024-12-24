import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header=()=>{
 const [isLogin,setIsLogin]=useState(true)

  const buttonName = isLogin?'Login':'Logout'

  const btnHandler=_=>{
    setIsLogin(prev=>!prev)
  }
    return (
        <div className='header'>
            <div className='logo-container'>
                <img  src='https://img.freepik.com/premium-vector/restaurant-logo-design_636083-178.jpg' className='logo' alt='logo image'/>
            </div>
            <div >
              <ul className='nav-items'>
                <li><Link to='/' className='link_text'><strong>Home</strong></Link></li>
                <li><Link to='/about' className='link_text'><strong>About</strong></Link></li>
                <li><Link to='/contact' className='link_text'><strong>Contact</strong></Link></li>
                <li><strong>Cart</strong></li>
                <button onClick={btnHandler} className='btn'>{buttonName}</button>
              </ul>
            </div>
           
        </div>
    )
}