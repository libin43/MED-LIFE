import React from 'react'
import "./TaskItem.css"

export const TaskItem = ({ patientName, taskId, status, appointmentId, dateTime, imageUrl }) => {
    return (
        <div className="task-item-grid-container">

            <div className="grid1-container">
                <img src={imageUrl} alt="Patient" />
            </div>

            <div className="grid2-container">
                <div className="row patient-name">{patientName}</div>
                <div className="row appointment-id">Appointment Id: {appointmentId}</div>
            </div>

            <div className="grid3-container">
                <div className="row task-id">Task ID: {taskId}</div>
                <div className="row date-time">Date and time: {dateTime}</div>
                <div className="row date-time">Duration: {dateTime}</div>
            </div>

            <div className="grid4-container">
                <div className="status">Status: {status}</div>
            </div>

            <div className="grid5-container">
                <a className="assessment-link">Intake comprehensive Assessment</a>
                <button className='assessment-btn'>Start Assesment</button>
            </div>
        </div>
    )
}
