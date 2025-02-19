import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/course02/index';
const StudentEnrollment = () => {
  const enrollmentData = [
    {
      id: 1,
      category: "Admission Requirements",
      details: [
        {
          grade: "Primary (1-5)",
          ageLimit: "5-10 years",
          documents: "Birth Certificate, Transfer Certificate, Report Card",
          entranceTest: "Basic aptitude assessment"
        },
        {
          grade: "Middle (6-8)",
          ageLimit: "11-13 years",
          documents: "Previous School Records, Transfer Certificate, Report Card",
          entranceTest: "English, Mathematics, Science"
        },
        {
          grade: "High (9-12)",
          ageLimit: "14-17 years",
          documents: "Previous School Records, Transfer Certificate, Report Card",
          entranceTest: "Subject-specific assessments"
        }
      ]
    },
    {
      id: 2,
      category: "Current Enrollment Status",
      details: [
        {
          grade: "Primary Section",
          totalStudents: "250",
          availableSeats: "20",
          classStrength: "25 per section"
        },
        {
          grade: "Middle Section",
          totalStudents: "180",
          availableSeats: "15",
          classStrength: "30 per section"
        },
        {
          grade: "High Section",
          totalStudents: "150",
          availableSeats: "10",
          classStrength: "30 per section"
        }
      ]
    }
  ];

  return (
    <Layout>
          <PageBanner
                        title="Student Enrollment"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Enrollment"
                        />
    <div className="container my-5">
      <h2 className="text-center mb-4">Student Enrollment</h2>
      <p className="text-muted mb-4">Admission Information and Current Status</p>
      
      <Accordion>
        {enrollmentData.map((section) => (
          <Accordion.Item eventKey={section.id.toString()} key={section.id}>
            <Accordion.Header>{section.category}</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Grade Level</th>
                    {Object.keys(section.details[0]).slice(1).map((key, idx) => (
                      <th key={idx}>{key.replace(/([A-Z])/g, ' $1').trim()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.details.map((detail, idx) => (
                    <tr key={idx}>
                      <td>{detail.grade}</td>
                      {Object.values(detail).slice(1).map((value, valueIdx) => (
                        <td key={valueIdx}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <style>
        {`
          .accordion-button {
            color: #0d6efd;
            background-color: #fff;
            font-weight: 500;
          }

          .accordion-button:not(.collapsed) {
            color: #0d6efd;
            background-color: #f8f9fa;
          }
          .accordion-button:hover {
              color: #0d6efd !important;
              background-color: #f8f9fa;
            }
          .table th {
            background-color: #f8f9fa;
          }
        `}
      </style>
    </div>
    </Layout>
  );
};

export default StudentEnrollment;