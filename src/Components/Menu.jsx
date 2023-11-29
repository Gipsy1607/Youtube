import React from 'react';
import './Menu.css';
import Homepage from './Homepage';

function Menu() {
  return (
    <div className='menu'>
      <div className="side-bar">
        <div>
            <i class="fa-solid fa-house fa-lg"></i>
            <p>Home</p>
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
            <button onClick={Homepage}>All</button>
            <button>Auditions</button>
            <button>Music</button>
            <button>Podcasts</button>
            <button>History</button>
            <button>Merell Twins</button>
            <button>Ghosts</button>
            <button>Film Criticisms</button>
            <button>Chill-out Music</button>
            <button>Civil Service Exam</button>
        </ul>
      </div>
    </div>
  )
}

export default Menu
