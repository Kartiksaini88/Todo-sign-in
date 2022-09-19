import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
            <div className="logo">Logo</div>
            <div className="links">
            <span><Link className='Link' to='/'>Home</Link></span>
            <span><Link className='Link' to='/login'>Login</Link></span>
            <span><Link className='Link' to='/register'>Register</Link></span>
            </div>
        </div>
  )
}

export default Navbar
