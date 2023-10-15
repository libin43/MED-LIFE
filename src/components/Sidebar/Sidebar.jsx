import React, { useState } from 'react'
import './Sidebar.css'

export const Sidebar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="sidebar">
          <h2>MEDLIFE</h2>
          <div className="dropdown" onClick={toggleDropdown}>
            <span>Add Clinical</span>
            {isDropdownOpen && (
          <div className="dropdown-content">
            <p>Appointments</p>
            <p>Tasks</p>
          </div>
        )}
          </div>
        </div>
      );
}
