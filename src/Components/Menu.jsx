import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className='menu'>
      <div className="side-bar">
        <div>
            <i class="fa-solid fa-house fa-lg">
                <p>Home</p>
            </i>
        </div>
        <div>
            <p>Shorts</p>
        </div>
        <div>
            <p>Subscriptions</p>
        </div>
        <div>
            <p>You</p>
        </div>
      </div>
      <div className="choice-bar">
        <ul id='items'>
            <button><li></li></button>
            <button><li></li></button>
            <button><li></li></button>
            <button><li></li></button>
            <button><li></li></button>
            <button><li></li></button>
        </ul>
      </div>
    </div>
  )
}

export default Menu
