import React from 'react'
import './Breadcrumb.css'

export const Breadcrumb = () => {
    const items = [{text:['appointments', 'tasks']}]
    return (
<div className="breadcrumb">
  <div className="active-heading">
    <div className="bold-text">Tasks</div>
  </div>
  <div className="navigation-info">
    Clinical <span className="info-icon">{'>'}</span> Tasks
  </div>
  <div className="active-heading-option-container">
    <div className="active-heading-option selected">Upcoming Tasks</div>
    {/* <div className="active-heading-option selected">Option 2</div> */}
    <div className="active-heading-option">Completed Tasks</div>
  </div>
</div>
      );
}
