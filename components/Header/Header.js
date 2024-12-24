import './Header.css'
import { useState } from 'react'
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
                <li><strong>Home</strong></li>
                <li><strong>About</strong></li>
                <li><strong>Contact</strong></li>
                <li><strong>Cart</strong></li>
                <button onClick={btnHandler} className='btn'>{buttonName}</button>
              </ul>
            </div>
           
        </div>
    )
}