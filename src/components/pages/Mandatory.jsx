import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import Layout from "../../common/Layout"
const MandatoryDisclosure = () => {
  const disclosureData = [
    {
      id: 1,
      category: "Basic Information",
      details: {
        schoolName: "ABC International School",
        address: "123 Education Street, City",
        principal: "Dr. Sarah Johnson",
        established: "1995",
        email: "contact@abcschool.edu",
        phone: "+91-123-456-7890"
      }
    },
    {
      id: 2,
      category: "Recognition & Affiliation",
      details: {
        affiliationBody: "CBSE",
        affiliationNumber: "1234567890",
        affiliationPeriod: "2020-2025",
        recognitionStatus: "Permanent",
        boardMedium: "English",
        type: "Co-Educational"
      }
    },
    {
      id: 3,
      category: "Infrastructure Details",
      details: {
        totalArea: "5 Acres",
        builtUpArea: "35,000 sq ft",
        playgroundArea: "2 Acres",
        classrooms: "50 Smart Classrooms",
        laboratories: "8 Fully Equipped Labs",
        library: "15,000 Books Collection"
      }
    }
  ];

  return (
    <Layout>
    <div className="container my-5">
      <h2 className="text-center mb-4">Mandatory Disclosure</h2>
      <p className="text-muted mb-4">Academic Year 2023-24</p>
      
      <Accordion>
        {disclosureData.map((section) => (
          <Accordion.Item eventKey={section.id.toString()} key={section.id}>
            <Accordion.Header className="custom-header">{section.category}</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <tbody>
                  {Object.entries(section.details).map(([key, value], idx) => (
                    <tr key={idx}>
                      <th className="w-25">{key.replace(/([A-Z])/g, ' $1').trim()}</th>
                      <td>{value}</td>
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

export default MandatoryDisclosure;