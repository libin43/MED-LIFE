import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsBoxArrowInRight, BsQuestionCircle } from 'react-icons/bs'
import { GrNotification } from 'react-icons/gr';


import './Navbar.css'

export const Navbar = () => {


  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>

      <div className="logo"><b>LOGO</b></div>
      <div className="navbar-left">
        < ul id="nav-menu" className={isMenuOpen ? "#nav-menu active" : "#nav-menu"}>
          <li className="active">Dashboard</li>

          <li className="parent">Clinical
            <ul className="submenu">
              <li>Add Clinical</li>
            </ul>
          </li>

          <li>Billing</li>
          <li>Resources</li>
          <li>Patients</li>
        </ul>
      </div>

      <div id="mobile" onClick={toggleMenu}>
        {
          isMenuOpen ? <FaTimes /> : <FaBars />
        }
      </div>

      <div className="navbar-right">
        <div className="toggle-menu" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="clocked-in">
          <button>
            <span className="clocked-icon">
              <BsBoxArrowInRight /> Clocked-In
            </span>
          </button>
        </div>
        <div className="notification">
          <GrNotification />
        </div>
        <div className="verify">
          <BsQuestionCircle />
        </div>
        <div className="user-info">
          <div className="user-image">
            <img src="" alt="MA" />
          </div>
          <div className="user-account">Account</div>
        </div>
      </div>
    </nav>
  );
}
