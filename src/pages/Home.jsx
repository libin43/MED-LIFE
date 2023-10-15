import React, { useState } from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Navbar } from '../components/Navbar/Navbar'
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb'
import "./Home.css"
import { Searchbar } from '../components/Search/Searchbar'
import { DateRangePicker } from '../components/DateRangePicker/DateRangePicker'
import { ButtonRound } from '../components/Button/ButtonRound'
import { BiFilter } from 'react-icons/bi';
import { TaskItem } from '../components/TaskItem/TaskItem'

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
                <Sidebar className="sidebar" />
                <div className="search-filter-content">
                    <Breadcrumb className="breadcrumb" />
                    <div className="content-body">
                        <Searchbar />
                        <DateRangePicker
                            className = "content-bpdy-date"
                            selectedDate={selectedDate}
                            handleDateChange={handleDateChange}
                            placeholder="From date"
                        />
                        To: <DateRangePicker
                            className = "content-bpdy-date"
                            selectedDate={selectedDate}
                            handleDateChange={handleDateChange}
                            placeholder="To date"
                        />
                        <ButtonRound style={{ backgroundColor: 'rgb(30, 16, 127)' }} onClick={handleApplyClick}>Apply</ButtonRound>
                        <ButtonRound style={{ backgroundColor: 'rgb(30, 16, 127)' }} onClick={handleResetClick}>Reset</ButtonRound>
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
                    <TaskItem/>
                </div>
            </div>

        </div>
    )
}
