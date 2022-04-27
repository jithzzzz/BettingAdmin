import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick]= useState(false);
    const [button, setButton]= useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    const showButton =() =>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
       
    };
    useEffect(()=> {showButton(); },[]);
    window.addEventListener('resize',showButton);
    
   
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                Betting Admin <i class="fa-solid fa-anchor"></i>
                </Link>   
                <div className='menu-icon' onClick={ handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <Link to={"/"} className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-items'>
                        <Link to={"/newAdmin"} className='nav-links' onClick={closeMobileMenu}>Add Admin</Link>
                        </li>
                        <li className='nav-items'>
                        <Link to={"/newBet"} className='nav-links' onClick={closeMobileMenu}>New Bet</Link>
                        </li>
                        <li className='nav-items'>
                        <Link to={"/database"} className='nav-links' onClick={closeMobileMenu}>Database</Link>
                        </li>
                        
                    </ul>
                    {button && <Button  buttonStyle='btn--outline'> SIGNUP</Button>}
                    
            
            </div>
        </nav>
    </>
  )
}

export default Navbar
