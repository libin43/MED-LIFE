import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Navbar } from '../components/Navbar/Navbar';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import { Searchbar } from '../components/Search/Searchbar';
import { DateRangePicker } from '../components/DateRangePicker/DateRangePicker';
import { ButtonRound } from '../components/Button/ButtonRound';
import { BiFilter } from 'react-icons/bi';
import { TaskItem } from '../components/TaskItem/TaskItem';
import sampleData from '../../data.json'
import "./Home.css";

export const Home = () => {
    const data = sampleData.patients
    console.log(data);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedBreadCrumb, setSelectedBreadCrumb] = useState(null)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleApplyClick = () => {
        // Perform actions when the "Apply" button is clicked
        console.log('Apply button clicked');
    };
    const handleResetClick = () => {
        // Reset the selected date or perform other actions
        setSelectedDate(null);
        console.log('Reset button clicked');
    };

    const handleBreadcrumbOptionSelect = (selectedOption) => {
        // Handle the selected option here
        console.log(`Selected option: ${selectedOption}`);
        setSelectedBreadCrumb(selectedOption)
    };
    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <div className="breadcrumb-container">
                        <Breadcrumb className="breadcrumb" tasks={['Upcoming Tasks', 'Completed Tasks']} onOptionSelect={handleBreadcrumbOptionSelect} />
                    </div>
                    <div className="data-container">
                        <div className="search-filter-content">
                            <div className="content-body">
                                <Searchbar />
                                <DateRangePicker
                                    className="content-body-date"
                                    selectedDate={selectedDate}
                                    handleDateChange={handleDateChange}
                                    placeholder="From date"
                                />
                                To:
                                <DateRangePicker
                                    className="content-body-date"
                                    selectedDate={selectedDate}
                                    handleDateChange={handleDateChange}
                                    placeholder="To date"
                                />
                                <ButtonRound style={{ backgroundColor: 'rgb(30, 16, 127)' }} onClick={handleApplyClick}>
                                    Apply
                                </ButtonRound>
                                <ButtonRound style={{ backgroundColor: 'rgb(30, 16, 127)' }} onClick={handleResetClick}>
                                    Reset
                                </ButtonRound>
                                <div className="filter-btn">
                                    <button>
                                        <span className="filter-icon">
                                            <BiFilter /> Filter
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="assessment-content">
                            {data
                                .filter((patient) => {
                                    if (selectedBreadCrumb === 'Completed Tasks') {
                                        return patient.status === 'Complete'
                                    } else {
                                        return patient.status !== 'Complete'
                                    }
                                })
                                .map((patient, index) => (
                                    <TaskItem
                                        key={index}
                                        patientName={patient.name}
                                        taskId={patient.id}
                                        appointmentId={patient.appointment_id}
                                        dateTime={patient.date_time}
                                        duration={patient.duration}
                                        imageUrl={'https://www.shutterstock.com/image-vector/person-icon-260nw-282598823.jpg'}
                                        assesmentType={patient.assessment_type}
                                        status={patient.status}
                                        selectedBreadCrumb={selectedBreadCrumb}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
