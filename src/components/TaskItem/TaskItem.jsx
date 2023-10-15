import React from 'react'
import "./TaskItem.css"

export const TaskItem = ({ patientName, taskId, status, appointmentId, dateTime, imageUrl }) => {
  return (
    <div className="task-item">
      <div className="image-container">
        <img src={imageUrl} alt="Patient" />
      </div>
      <div className="task-details">
        <div className="row">
          <div className="column patient-name">{patientName}</div>
          <div className="column task-id">{taskId}</div>
          <div className="column status">{status}</div>
        </div>
        <div className="row">
          <div className="column appointment-id">{appointmentId}</div>
          <div className="column date-time">{dateTime}</div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  )
}
