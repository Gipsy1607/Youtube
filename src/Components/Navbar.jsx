import React from 'react';
import './Navbar.css';
import logo from './images/Youtube.jpg';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const router = useNavigate();

  function Login (){
    router('/login')
  }
  return (
    <>
    <nav className="navbar"> 
      <div className="bars">
        <i class="fa-solid fa-bars fa-lg"></i>
        <img className="logo-site" src={logo} alt=""/>
      </div>
      <div className="search-bar">
          <input type='text' placeholder='Search'/>
          <button><i class="fa-solid fa-magnifying-glass fa-xl" id='search-button'></i></button>
      </div>
      <div id='voice'>
      <i class="fa-solid fa-microphone fa-lg"></i>
      </div>
      <div className="left-side">
        <div id='video'>
        <i class="fa-solid fa-video fa-lg"></i>
        </div>
        <button id='bell-icon' onClick={<i class="fa-solid fa-bell-slash"></i>}>
        <i class="fa-regular fa-bell fa-lg"></i>
        </button>
        <button id='Sign-in' onClick={Login}>
          Sign In
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar
