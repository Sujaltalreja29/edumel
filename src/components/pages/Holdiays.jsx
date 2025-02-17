import React from 'react';
import Layout from "../../common/Layout"
import { PageBanner } from '../layouts/blog/index';
import './HolidayList.css';

const LegendItem = ({ color, label }) => (
  <div className="legend-item">
    <div className="legend-dot" style={{ backgroundColor: color }}></div>
    <span className="legend-label">{label}</span>
  </div>
);

const HolidaySection = ({ title, backgroundColor, textColor = "inherit", children }) => (
  <div className="holiday-section">
    <div className="section-header" style={{ backgroundColor }}>
      <h3 className="section-title" style={{ color: textColor }}>{title}</h3>
    </div>
    <div className="section-content">
      {children}
    </div>
  </div>
);

const QuarterlyHolidays = ({ title, holidays }) => (
  <div className="quarterly-holidays">
    <h4 className="quarter-title">{title}</h4>
    <ul className="holiday-list">
      {holidays.map((holiday, index) => (
        <li key={index} className="holiday-item">
          <span>{holiday.name}</span>
          <span className="holiday-date">{holiday.date}</span>
        </li>
      ))}
    </ul>
  </div>
);

const HolidayList = () => {
  const publicHolidays = {
    q1: [
      { name: "Independence Day", date: "Aug 15" },
      { name: "Ganesh Chaturthi", date: "Sep 07" },
      { name: "Anant Chaturdashi", date: "Sep 17" }
    ],
    q2: [
      { name: "Gandhi Jayanti", date: "Oct 02" },
      { name: "Dussehra", date: "Oct 24" },
      { name: "Diwali", date: "Nov 12-13" },
      { name: "Christmas", date: "Dec 25" }
    ],
    q3: [
      { name: "Republic Day", date: "Jan 26" },
      { name: "Maha Shivratri", date: "Mar 08" },
      { name: "Holi", date: "Mar 25" }
    ],
    q4: [
      { name: "Good Friday", date: "Mar 29" },
      { name: "Dr. Ambedkar Jayanti", date: "Apr 14" },
      { name: "Maharashtra Day", date: "May 01" }
    ]
  };

  const vacationBreaks = [
    { name: "Diwali Break", date: "Oct 26 - Nov 03" },
    { name: "Winter Break", date: "Dec 20 - Jan 06" },
    { name: "Spring Break", date: "Mar 17 - Mar 21" },
    { name: "Summer Break", date: "May 31 - July 05" }
  ];

  const halfDays = [
    { name: "Parent-Teacher Meeting", date: "Sep 30" },
    { name: "Sports Day", date: "Dec 15" },
    { name: "Annual Day", date: "Feb 28" },
    { name: "Last Working Day", date: "May 30" }
  ];

  const nonStudentDays = [
    { name: "Teachers' Professional Development", date: "Aug 05" },
    { name: "Staff Training Day", date: "Nov 24" },
    { name: "Academic Planning Day", date: "Jan 15" },
    { name: "Assessment Planning Day", date: "Apr 05" }
  ];

  return (
    <Layout>
      <PageBanner
        title="Academic Year 2024-25"
        rootUrl="/"
        parentUrl="Home"
        currentUrl="Holiday List"
      />
      
      <div className="holiday-list-container">
        <div className="holiday-list-content">
          <div className="legend">
            <LegendItem color="#FFD700" label="No School" />
            <LegendItem color="#00BFFF" label="Public Holiday" />
            <LegendItem color="#90EE90" label="Non-Student Day" />
            <LegendItem color="#FF69B4" label="Half-Day" />
          </div>

          <div className="holiday-sections">
            <HolidaySection title="Public Holidays" backgroundColor="#00BFFF" textColor="white">
              <div className="quarters-grid">
                <QuarterlyHolidays 
                  title="July - September 2024" 
                  holidays={publicHolidays.q1} 
                />
                <QuarterlyHolidays 
                  title="October - December 2024" 
                  holidays={publicHolidays.q2} 
                />
                <QuarterlyHolidays 
                  title="January - March 2025" 
                  holidays={publicHolidays.q3} 
                />
                <QuarterlyHolidays 
                  title="April - June 2025" 
                  holidays={publicHolidays.q4} 
                />
              </div>
            </HolidaySection>

            <HolidaySection title="Vacation Breaks" backgroundColor="#FFD700">
              <ul className="holiday-list">
                {vacationBreaks.map((holiday, index) => (
                  <li key={index} className="holiday-item">
                    <span>{holiday.name}</span>
                    <span className="holiday-date">{holiday.date}</span>
                  </li>
                ))}
              </ul>
            </HolidaySection>

            <HolidaySection title="Half Days" backgroundColor="#FF69B4" textColor="white">
              <ul className="holiday-list">
                {halfDays.map((holiday, index) => (
                  <li key={index} className="holiday-item">
                    <span>{holiday.name}</span>
                    <span className="holiday-date">{holiday.date}</span>
                  </li>
                ))}
              </ul>
            </HolidaySection>

            <HolidaySection title="Non-Student Days" backgroundColor="#90EE90">
              <ul className="holiday-list">
                {nonStudentDays.map((holiday, index) => (
                  <li key={index} className="holiday-item">
                    <span>{holiday.name}</span>
                    <span className="holiday-date">{holiday.date}</span>
                  </li>
                ))}
              </ul>
            </HolidaySection>

            <div className="important-notes">
              <p>* All dates are subject to change. Any modifications will be communicated in advance.</p>
              <p>* School may declare additional holidays due to local events or emergency situations.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HolidayList;