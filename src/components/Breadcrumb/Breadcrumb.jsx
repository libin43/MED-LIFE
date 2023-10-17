import React, { useState } from 'react'
import './Breadcrumb.css'

export const Breadcrumb = ({ tasks, onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState('Upcoming Tasks');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };
  return (
    <div className="breadcrumb">
      <div className="active-heading">
        <div className="bold-text">Tasks</div>
      </div>
      <div className="navigation-info">
        Clinical <span className="info-icon">{'>'}</span> Tasks
      </div>
      <div className="active-heading-option-container">
      {tasks.map((option, index) => (
          <div
            key={index}
            className={`active-heading-option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
