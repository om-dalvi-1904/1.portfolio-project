import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className='nav-links'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar