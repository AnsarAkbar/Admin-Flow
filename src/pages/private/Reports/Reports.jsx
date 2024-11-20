import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

const Reports = () => {
    const [readmore,setReadmore]=useState(false)
  const reportsData = [
    {
      id: 1,
      title: "Annual Sales Report 2024",
      date: "January 12, 2024",
      summary: "This report covers the total sales performance for the year 2024, including growth analysis and forecasts for the upcoming year.",
    },
    {
      id: 2,
      title: "Customer Satisfaction Survey 2024",
      date: "February 5, 2024",
      summary: "This report presents the results of the 2024 customer satisfaction survey, highlighting areas for improvement and customer feedback.This report presents the results of the 2024 customer satisfaction survey, highlighting areas for improvement and customer feedback.",
    },
    {
      id: 3,
      title: "Website Traffic Analysis Q1 2024",
      date: "March 15, 2024",
      summary: "A comprehensive analysis of website traffic for the first quarter of 2024, including traffic sources, popular pages, and user demographics.",
    },
    {
      id: 4,
      title: "Employee Performance Review 2024",
      date: "April 1, 2024",
      summary: "An in-depth report analyzing employee performance across departments for the first quarter of 2024, with recommendations for improvements.",
    },
    {
      id: 5,
      title: "Market Trends Report Q2 2024",
      date: "May 20, 2024",
      summary: "This report covers the current market trends for Q2 2024, analyzing industry changes, emerging technologies, and potential business impacts.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">Reports</h1>
        <p className="text-lg text-gray-600">Browse through the latest reports to stay updated with key insights and data.</p>
      </header>

      <div className="flex flex-wrap gap-y-4 justify-center">
        {reportsData.map((report) => (
          <div key={report.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs mx-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{report.title}</h3>
              <p className="text-sm text-gray-500">{report.date}</p>
              <p className="text-md text-gray-700 mt-4 line-clamp-3">{report.summary}</p>
              <div className="mt-6">
                <NavLink className="text-blue-600 text-sm hover:underline cursor-pointer">
                  Read Full Report
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
