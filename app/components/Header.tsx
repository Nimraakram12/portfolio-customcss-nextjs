

import React from 'react'
import Link from 'next/link'
import "../style/Header.css";
const Header = () => {
  return (
    <div className='header'>
        
        <div className='header-left'>
            <h1>My Portfolio</h1>
        </div>
        <div className='header-right'>
            <ul className='header-links'>
                <li>
            <Link className="nav-links" href="/">Home</Link>
                </li>
                <li>
            <Link className="nav-links" href="/#about">About</Link>
                </li>
                <li>
            <Link className="nav-links" href="/#skills">Skills</Link>
                </li>
                <li>
            <Link className="nav-links" href="/#contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className='btn'>
            <a href="/images/cv.pdf">
            <button>
                Download CV
            </button>
            </a>
        </div>
    </div>
  )
}

export default Header