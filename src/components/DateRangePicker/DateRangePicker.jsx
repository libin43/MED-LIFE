import React, { useState } from 'react'
import { ButtonRound } from '../Button/ButtonRound';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./DateRangePicker.css"

export const DateRangePicker = ({  selectedDate, handleDateChange, placeholder }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
      };
    
      const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
      };

      const handleApply = () => {
        if (startDate && endDate) {
          onDateRangeSelect({ startDate, endDate });
        } else {
          // Handle invalid date range
        }
      };
      return (
        <div>
        <DatePicker
          className="custom-datepicker"
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText={placeholder}
          dateFormat="dd/MM/yyyy" // Customize the date format
        />
      </div>
  
      );
}
