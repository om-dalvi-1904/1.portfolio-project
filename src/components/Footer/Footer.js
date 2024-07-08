import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='footer-copyright'>
            <p>Follow me on</p>
        </div>
        <ul className="footer-social">
            <li>
                <a href='https://www.facebook.com/omdalvi19?mibextid=ZbWKwL'>
                    <i className='fa-brands fa-facebook'></i>
                </a>
            </li>
            <li>
                <a href='https://x.com/omdalvi1904'>
                    <i className='fa-brands fa-twitter'></i>
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/_om._19?igsh=MXd3M2tvbWswcmJyaQ%3D%3D&utm_source=qr'>
                    <i className='fa-brands fa-instagram'></i>
                </a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/om-dalvi-619554292/'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </li>
        </ul>
    </footer>
  )
}

export default Footer