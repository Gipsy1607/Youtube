import React from 'react'
import './Navbar.css';
import logo from './images/Youtube-logo.jpeg'
function Navbar() {
  return (
    <>
    <nav className="navbar"> 
      <div className="bars">
        <i class="fa-solid fa-bars"></i>
      </div>
      <a href="#home" className="logo"><img src={logo} alt="" /></a>
      <div className="search-bar">
          <input type='text' placeholder='Search'/>
          <button><i class="fa-solid fa-magnifying-glass fa-xl" id='search-button'></i></button>
          <i class="fa-solid fa-microphone" id='voice'></i>
      </div>
      <div className="left-side">
        <div id='video'>
        <i class="fa-solid fa-video"></i>
        </div>
        <button id='bell-icon' onClick={<i class="fa-solid fa-bell-slash"></i>}>
        <i class="fa-regular fa-bell"></i>
        </button>
        <div id='profile'>
        <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
