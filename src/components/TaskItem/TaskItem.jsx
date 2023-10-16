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
                <div className="row task-id">Task ID: <span>{taskId}</span></div>
                <div className="row date-time">Date and time: <span>{dateTime}</span></div>
                <div className="row date-time">Duration: <span>{dateTime}</span></div>
            </div>

            <div className="grid4-container">
                <div className="status">Status: <span>{status}</span></div>
            </div>

            <div className="grid5-container">
                <a className="assessment-link">Intake Comprehensive Assessment</a>
                <div className="assessment-btn">
                <button>Start Assesment</button>
                </div>
            </div>
        </div>
    )
}
