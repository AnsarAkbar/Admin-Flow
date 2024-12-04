import React from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../pages/private/Team/Team";

const Sidebar = ({ menuOpen }) => {

  // const sidebarEliments=[{path:"/admin/dashbord"},]

  return (
    <div className={`flex ${menuOpen ? "block" : "hidden"}`}>
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white h-[fit-content] p-6">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
            className="w-12 h-12 mr-4"
          />
          <span className="text-2xl font-semibold">Your Company</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-4">
            {/* Main Navigation Items */}
            <li>
              <Link
                to={"/admin/dashbord"}
                className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  ></path>
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to={"/team"}
                className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  ></path>
                </svg>
                Team
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  ></path>
                </svg>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to={"/meeting-schedule"}
                className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  ></path>
                </svg>
                Calendar
              </Link>
            </li>
            <li>
              <Link 
                to={'/documentation'}
                className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  ></path>
                </svg>
                Documents
              </Link>
            </li>
            <li>
              <Link
                to={'/reports'}
                className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-3"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                  ></path>
                </svg>
                Reports
              </Link>
            </li>
          </ul>

          {/* Teams Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">Your teams</h3>
            <ul className="space-y-3">
              {teamMembers.map((teamMember, index) => {
                return (
                  <li key={index}>
                    <Link to={`team/${teamMember.id}`} className="flex items-center text-lg hover:bg-gray-700 p-2 rounded-md transition">
                      <span className="w-8 h-8 rounded-full bg-gray-500 mr-3 flex items-center justify-center">
                        {teamMember.name[0]}
                      </span>
                      {teamMember.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
