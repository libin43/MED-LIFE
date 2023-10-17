import React, { useState } from 'react'
import { PiClockCountdown, PiNotepad } from 'react-icons/pi';
import {SlArrowRight} from 'react-icons/sl'
import './Sidebar.css'

export const Sidebar = () => {

    const [submenus, setSubmenus] = useState([
        { name: 'Submenu 1', isOpen: false, options: [{icon: <PiClockCountdown />,label: 'Appointments', selected: false},{icon: <PiNotepad/>,label: 'Tasks', selected: false}] },
        { name: 'Submenu 2', isOpen: false, options: [] },
        // Add more items for additional submenus as needed
      ]);
    
      const toggleDropdown = (index) => {
        const updatedSubmenus = submenus.map((submenu, i) => {
          if (i === index) {
            return { ...submenu, isOpen: !submenu.isOpen };
          } else {
            return { ...submenu, isOpen: false }; // Close other submenus
          }
        });
        setSubmenus(updatedSubmenus);
      };
      const handleOptionClick = (submenuIndex, optionIndex) => {
        const updatedSubmenus = submenus.map((submenu, i) => {
          if (i === submenuIndex) {
            const updatedOptions = submenu.options.map((option, j) => {
              if (j === optionIndex) {
                return { ...option, selected: true };
              }
              return { ...option, selected: false };
            });
            return { ...submenu, options: updatedOptions };
          }
          return submenu;
        });
        setSubmenus(updatedSubmenus);
      };
      return (
        <div className="sidebar">
          <h2>MEDLIFE</h2>
          {submenus.map((submenu, index) => (
            <div className={`submenu ${submenu.isOpen ? 'open' : ''}`} key={index} onClick={() => toggleDropdown(index)}>
              <div className="submenu-item">
                {submenu.name}
                <span className={`icon ${submenu.isOpen ? 'open' : ''}`}><SlArrowRight /></span>
              </div>
             
                <div className={`dropdown-content ${submenu.isOpen ? 'open' : ''}`}>
                  {submenu.options.map((option, optionIndex) => (
              <p
              key={optionIndex}
              className={`option ${option.selected ? 'selected' : ''}`}
              onClick={(e) => {
                e.stopPropagation(); // Prevent submenu from closing
                handleOptionClick(index, optionIndex);
              }}
      
            >
                      {option.icon}
                      {option.label}
                    </p>
                  ))}
                </div>
      
            </div>
          ))}
        </div>
      );
}
