import React from 'react';
import { CalendarDays } from "lucide-react";
import Layout from '../../common/Layout';
import { Link } from 'react-router-dom';
const notices = [
  {
    date: "31 Jan",
    title: "Seating Arrangement for 1st Mid Sem Exam of 2nd Sem B.Tech. AY2024-25",
    isNew: true,
  },
  {
    date: "31 Jan",
    title: "1st Mid Sem Exam Schedule 2nd Sem. B.Tech. AY24-25",
    isNew: true,
  },
  {
    date: "31 Jan",
    title: "Attention: BTech 6th sem & 8th sem students; Internship course registration and Submission of Report & Industry Certificate",
    isNew: true,
  },
  {
    date: "25 Jan",
    title: "Notice for Change in Seating Arrangement (Tutorial) for 1st Sem. B.Tech. Students AY24-25",
  },
  {
    date: "23 Jan",
    title: "Seating Arrangement for 1st Mid Sem. Exam Even Semesters, AY2024-25",
  },
  {
    date: "21 Jan",
    title: "Registration Check for B. Tech. Sem. – 2, 4, 6 & 8, M. Tech. Sem. 4 and PDDC Sem. – 2, 4, 6 & 8 in Even Sem. AY 2024-25",
  },
  {
    date: "20 Jan",
    title: "1st Mid Sem Exam Schedules Even Semesters of B.Tech. PDDC AY24-25",
  },
  {
    date: "16 Jan",
    title: "Registration Notice (EVEN semester AY 2024-25) for M. Tech. Sem. 2",
  },
  {
    date: "8 Jan",
    title: "Revised Allotment of B.Tech Sem 6 Open elective courses and NPTEL against OE AY 2024-25",
  },
  {
    date: "1 Jan",
    title: "Registration Notice (EVEN semester AY 2024-25) for B. Tech. Sem. - 2 students",
  },
];

const NoticePage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6 py-5">
            <h1 className="text-2xl font-semibold text-gray-900 text-center">Notice Board</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-28">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notice Details
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 mb-15">
                  {notices.map((notice, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-gray-400" />
                          <span className="text-xs text-gray-600">{notice.date}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div
                            onClick={() => (window.location.href = "https://example.com")}
                            style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                            className="text-sm text-blue-600 transition-colors duration-150">
                            {notice.title}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                          View →
                        </button>
                      </td>
                    </tr>
                    
                  ))}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='section py-10 text-white font-5xl'>
        bottom
      </div>
    </Layout>
  );
};

export default NoticePage;