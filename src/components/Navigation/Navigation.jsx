import React from 'react'
import './navigation.css'
import logo from '../image/logo.png';

const Navigation = () => {
  return (
    <>
    <nav>
       <div className="logo">
         <img src={logo} alt="facelada" />
      </div>
      <div className="logout">
         <p>Sign out</p>
      </div>
    </nav>
    </>
  )
}

export default Navigation