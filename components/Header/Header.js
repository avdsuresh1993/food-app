import './Header.css'
export const Header=()=>{
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
              </ul>
            </div>
           
        </div>
    )
}