import React from "react";
import { Table } from "react-bootstrap";
import Layout from "../../common/Layout"
// Sample data for school notices
const noticeData = [
  {
    id: 1,
    month: "September 2023",
    notices: [
      { date: "2023-09-05", topic: "Back to School Welcome Assembly" },
      { date: "2023-09-15", topic: "Parent-Teacher Meeting for Grade 10" },
      { date: "2023-09-25", topic: "Annual Sports Day Announcement" },
    ],
  },
  {
    id: 2,
    month: "October 2023",
    notices: [
      { date: "2023-10-02", topic: "Gandhi Jayanti Holiday" },
      { date: "2023-10-10", topic: "Mid-Term Exam Schedule Release" },
      { date: "2023-10-20", topic: "School Book Fair" },
    ],
  },
  {
    id: 3,
    month: "November 2023",
    notices: [
      { date: "2023-11-01", topic: "Inter-School Debate Competition" },
      { date: "2023-11-14", topic: "Children's Day Celebration" },
      { date: "2023-11-25", topic: "Annual Day Rehearsals Begin" },
    ],
  },
];

const SchoolNoticePage = () => {
  // Flatten the notices array while preserving month information
  const allNotices = noticeData.flatMap(monthData => 
    monthData.notices.map(notice => ({
      ...notice,
      month: monthData.month
    }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Layout>
    <div className="container my-5">
      <h1 className="text-center mb-4">School Notices</h1>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead className="bg-primary text-white">
            <tr>
              <th width="20%">Date</th>
              <th>Notice</th>
            </tr>
          </thead>
          <tbody>
            {allNotices.map((notice, index) => (
              <tr key={index}>
                <td>
                  <div className="text-primary fw-bold">
                    {new Date(notice.date).toLocaleDateString("en-US", { 
                      day: "numeric", 
                      month: "short" 
                    })}
                  </div>
                </td>
                <td>
                  <div className="notice-content">
                    {notice.topic}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <style>
        {`
          .table {
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
          }

          .table thead th {
            border-bottom: none;
            font-weight: 600;
          }

          .table td {
            vertical-align: middle;
            padding: 1rem;
          }

          .notice-content {
            font-size: 1rem;
            color: #333;
          }

          @media (max-width: 768px) {
            .table td {
              padding: 0.75rem;
            }
            
            .notice-content {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
    </Layout>
  );
};

export default SchoolNoticePage;