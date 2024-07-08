import React from 'react'
import "./Header.css"
import profileImg from "../../assets/profileImg.png"

const Header = () => {
  return (
    <div className='header-container'>
        {/* header content */}
        <div className='header-content'>
            <h1>Hey! Am</h1>
            <h2 className='full-name'>
                Om Dalvi
            </h2>
            <p>I consider myself a responsible and organized individual, eager for my first professional experience. I have a deep passion for technology and a strong drive for continuous learning and growth. Recently, I began my journey into programming and accepted the #100DaysOfCode challenge on X. I've developed numerous small projects in Python, including games.</p> 
        </div>
        {/* image container */}
        <div className='profile-img-container'>
            <img src={profileImg} alt='profileImg'></img>
            <div className='circle-1'></div>
            <div className='circle-2'></div>
        </div>
    </div>
  )
}

export default Header