import React, { useEffect, useState } from "react";

const MeetingSchedule = () => {
  // State to handle the selected month
  const [currentMonth, setCurrentMonth] = useState("January");
  const [currentYear, setCurrentYear] = useState(2024);
  const [selectedDate, setSelectedDate] = useState();

  const [shedulemeetings, setShedulemeetings] = useState([]);

  // console.log(selectedDate);

  // Function to handle month change
  const changeMonth = (direction) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentIndex = months.indexOf(currentMonth);
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    setSelectedDate((e) => ({ ...e, year: currentYear }));
    if (newIndex < 0) {
      newIndex = 11;
      setCurrentYear((e) => e - 1);
      setSelectedDate((e) => ({ ...e, year: currentYear }));
    } // Wrap around to December
    else if (newIndex > 11) {
      newIndex = 0;
      setCurrentYear((e) => e + 1);
      setSelectedDate((e) => ({ ...e, year: currentYear }));
    } // Wrap around to January

    setCurrentMonth(months[newIndex]);
    setSelectedDate((prev) => ({ ...prev, month: currentMonth }));
  };

  return (
    <div className="container mx-auto p-4 ">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Upcoming meetings
      </h2>

      {/* Calendar Navigation */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeMonth("previous")}
          className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
        >
          <span className="mr-2">Previous month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="text-xl font-medium text-gray-800">
          {currentMonth},{currentYear}
        </div>
        <button
          onClick={() => changeMonth("next")}
          className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
        >
          <span className="mr-2">Next month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-4 mb-4">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
          <div key={index} className="text-center font-medium text-gray-600">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7 gap-4">
        {[...Array(31)].map((_, index) => (
          <button
            key={index}
            onClick={() =>
              setSelectedDate((prev) => ({
                ...prev,
                date: index + 1,
                month: currentMonth,
                year: currentYear,
              }))
            }
            className="px-4 py-2 bg-gray-100 text-center text-gray-700 rounded-md hover:bg-gray-200 transition"
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Add Event Button */}
      <button
        onClick={() => {
          if (selectedDate) {
            setShedulemeetings((prev) => [...prev, selectedDate]);
            setSelectedDate("");
          }
        }}
        className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition"
      >
        Add event
      </button>

      {/* Upcoming Meetings */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Upcoming Meetings
        </h3>
        <ul className="space-y-4">
          {/* Meeting Item */}

          <div>
            {
              // console.log(shedulemeetings)
              shedulemeetings?.map((meeting, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center space-x-4 p-4 border rounded-md shadow-sm bg-slate-400 mt-1"
                  >
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Leslie"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-gray-800">
                        Leslie Alexander
                      </h4>
                      <p className="text-gray-600">
                        {meeting.month} {meeting.date}, {meeting.year}
                      </p>
                      <p className="text-gray-600">Location: Starbucks</p>
                    </div>
                  </li>
                );
              })
            }
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MeetingSchedule;
