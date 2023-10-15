import React from 'react'
import { FaSearch } from 'react-icons/fa';
import "./Searchbar.css"

export const Searchbar = ({ value, onChange, style }) => {
  return (
    <div className="search-container">
      <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={value}
          onChange={onChange}
          style={style}
          className="search-bar"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
