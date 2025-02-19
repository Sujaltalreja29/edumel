import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/about';

const feesData = [
  {
    id: 1,
    grade: "Primary School (Grades 1-5)",
    details: {
      tuition: "₹80,000",
      admission: "₹10,000",
      development: "₹5,000",
      laboratory: "₹3,000",
      activities: "₹4,000",
      transport: "₹15,000 - ₹25,000 (distance-based)"
    }
  },
  {
    id: 2,
    grade: "Middle School (Grades 6-8)",
    details: {
      tuition: "₹90,000",
      admission: "₹12,000",
      development: "₹6,000",
      laboratory: "₹4,000",
      activities: "₹5,000",
      transport: "₹15,000 - ₹25,000 (distance-based)"
    }
  },
  {
    id: 3,
    grade: "High School (Grades 9-12)",
    details: {
      tuition: "₹100,000",
      admission: "₹15,000",
      development: "₹7,000",
      laboratory: "₹5,000",
      activities: "₹6,000",
      transport: "₹15,000 - ₹25,000 (distance-based)"
    }
  }
];

const scholarshipData = [
  {
    id: 1,
    name: "Merit Scholarship",
    details: {
      eligibility: "Students with 90% or above in previous academic year",
      benefit: "Up to 50% tuition fee waiver",
      duration: "One academic year (renewable)",
      documents: "Previous year marksheets, recommendation letter",
      deadline: "June 30th every year"
    }
  },
  {
    id: 2,
    name: "Sports Excellence Scholarship",
    details: {
      eligibility: "National/State level sports achievers",
      benefit: "Up to 75% tuition fee waiver",
      duration: "Full academic year",
      documents: "Sports certificates, coach recommendation",
      deadline: "May 31st every year"
    }
  },
  {
    id: 3,
    name: "Financial Need-based Scholarship",
    details: {
      eligibility: "Family income below ₹3,00,000 per annum",
      benefit: "Up to 100% tuition fee waiver",
      duration: "Full academic year",
      documents: "Income certificate, recommendation letter",
      deadline: "July 15th every year"
    }
  }
];

const FeesAndScholarship = () => {
  return (
    <Layout>
          <PageBanner
                        title="Fees Structure and Scholarships"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="fee structure"
                        />
      <div className="container my-5">
        
        {/* Fees Section */}
        <div className="mb-5">
          <h3 className="mb-3">Fees Structure</h3>
          <p className="text-muted mb-4">Academic Year 2023-24</p>
          <Accordion>
            {feesData.map((fee) => (
              <Accordion.Item eventKey={fee.id.toString()} key={fee.id}>
                <Accordion.Header className="custom-header">
                  {fee.grade}
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <th>Tuition Fee (Annual)</th>
                        <td>{fee.details.tuition}</td>
                      </tr>
                      <tr>
                        <th>Admission Fee</th>
                        <td>{fee.details.admission}</td>
                      </tr>
                      <tr>
                        <th>Development Fee</th>
                        <td>{fee.details.development}</td>
                      </tr>
                      <tr>
                        <th>Laboratory Fee</th>
                        <td>{fee.details.laboratory}</td>
                      </tr>
                      <tr>
                        <th>Activities Fee</th>
                        <td>{fee.details.activities}</td>
                      </tr>
                      <tr>
                        <th>Transport Fee (Optional)</th>
                        <td>{fee.details.transport}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        {/* Scholarships Section */}
        <div>
          <h3 className="mb-3">Scholarship Programs</h3>
          <p className="text-muted mb-4">Available Scholarships and Eligibility Criteria</p>
          <Accordion>
            {scholarshipData.map((scholarship) => (
              <Accordion.Item eventKey={scholarship.id.toString()} key={scholarship.id}>
                <Accordion.Header className="custom-header">
                  {scholarship.name}
                </Accordion.Header>
                <Accordion.Body>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <th>Eligibility</th>
                        <td>{scholarship.details.eligibility}</td>
                      </tr>
                      <tr>
                        <th>Benefits</th>
                        <td>{scholarship.details.benefit}</td>
                      </tr>
                      <tr>
                        <th>Duration</th>
                        <td>{scholarship.details.duration}</td>
                      </tr>
                      <tr>
                        <th>Required Documents</th>
                        <td>{scholarship.details.documents}</td>
                      </tr>
                      <tr>
                        <th>Application Deadline</th>
                        <td>{scholarship.details.deadline}</td>
                      </tr>
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

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

            .accordion-button:focus {
              box-shadow: none;
              border-color: rgba(0,0,0,.125);
            }

            .table {
              margin-bottom: 0;
            }

            .table th {
              width: 200px;
              background-color: #f8f9fa;
            }

            @media (max-width: 768px) {
              .table th {
                width: 140px;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default FeesAndScholarship;