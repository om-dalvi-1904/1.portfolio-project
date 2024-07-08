import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div className='skill-container'>
        <div className='skill-list-container'>
            {/* description */}
            <div className='skill-desc-container'>
                <div className='skill-item-container'>
                    <h1>Some more about me</h1>
                    <p>I completed my education up to SSC at Sindhudurg Sainik School, Amboli, where I ranked 2nd in the school. After that, I moved to Pune and completed my HSC with first-class honors from MIT Junior College. Currently, I am pursuing an ENTC Engineering degree at PCCOE, Pune.</p>
                </div>
            </div>
            {/* skills item */}
            <div className='skill-item-container'>
                <div className='skill-item'>
                    <i className='fa-solid fa-desktop'></i>
                    <div className='item-desc'>
                        <h3>Computer Skills</h3>
                        <p>I am proficient in various computer languages, including C, C++, Python, and JavaScript. I am also skilled in MS Office tools such as MS Excel, MS Word, and PowerPoint. Additionally, I have completed the #100DaysOfCoding challenge.</p>
                    </div>
                </div>
                <div className='skill-item'>
                    <i className='fa-solid fa-language'></i>
                    <div className='item-desc'>
                        <h3>Languages</h3>
                        <p>As a student in an English medium institution, I am very fluent in English. Additionally, I am familiar with Marathi, Hindi, and German languages.</p>
                    </div>
                </div>
                <div className='skill-item'>
                    <i className='fa-solid fa-medal'></i>
                    <div className='item-desc'>
                        <h3>Hobbies</h3>
                        <p>My hobbies include volleyball, swimming, reading books, and playing cricket.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills