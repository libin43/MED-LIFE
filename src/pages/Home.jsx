import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Navbar } from '../components/Navbar/Navbar';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';
import "./Home.css";
import { Searchbar } from '../components/Search/Searchbar';
import { DateRangePicker } from '../components/DateRangePicker/DateRangePicker';
import { ButtonRound } from '../components/Button/ButtonRound';
import { BiFilter } from 'react-icons/bi';
import { TaskItem } from '../components/TaskItem/TaskItem';

export const Home = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Function to handle date change
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleApplyClick = () => {
        // Perform actions when the "Apply" button is clicked
        console.log('Apply button clicked');
        // You can use the selectedDate in your logic
    };
    const handleResetClick = () => {
        // Reset the selected date or perform other actions
        setSelectedDate(null);
        console.log('Reset button clicked');
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
                        <Breadcrumb className="breadcrumb" />
                    </div>
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
                        <TaskItem patientName={'Libin'} taskId={12333} status={'Overdue'} appointmentId={222222} dateTime={'26 Fri 2022'} imageUrl={'https://www.shutterstock.com/image-vector/person-icon-260nw-282598823.jpg'}/>
                        <TaskItem patientName={'Libin'} taskId={12333} status={'Overdue'} appointmentId={222222} dateTime={'26 Fri 2022'} imageUrl={'https://www.shutterstock.com/image-vector/person-icon-260nw-282598823.jpg'}/>
                        <TaskItem patientName={'Libin'} taskId={12333} status={'Overdue'} appointmentId={222222} dateTime={'26 Fri 2022'} imageUrl={'https://www.shutterstock.com/image-vector/person-icon-260nw-282598823.jpg'}/>
                        <TaskItem patientName={'Libin'} taskId={12333} status={'Overdue'} appointmentId={222222} dateTime={'26 Fri 2022'} imageUrl={'https://www.shutterstock.com/image-vector/person-icon-260nw-282598823.jpg'}/>
                        <TaskItem patientName={'Libin'} taskId={12333} status={'Overdue'} appointmentId={222222} dateTime={'26 Fri 2022'} imageUrl={'https://www.shutterstock.com/image-vector/person-icon-260nw-282598823.jpg'}/>

                    </div>
                </div>
            </div>
        </div>
    );
};
