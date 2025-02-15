import React from "react";
import { Accordion, Table } from "react-bootstrap";
import Layout from '../../common/Layout';

const affiliationData = [
  {
    id: 1,
    name: "International Baccalaureate (IB)",
    details: {
      type: "International",
      level: "Primary, Middle, and High School",
      year: "Since 2005",
      benefits: "Globally recognized curriculum, emphasis on critical thinking",
    },
  },
  {
    id: 2,
    name: "Cambridge Assessment International Education",
    details: {
      type: "International",
      level: "Primary and Secondary Education",
      year: "Since 2010",
      benefits: "Rigorous academic standards, prepares students for higher education",
    },
  },
  {
    id: 3,
    name: "Council for the Indian School Certificate Examinations (CISCE)",
    details: {
      type: "National",
      level: "Primary and Secondary Education",
      year: "Since 1998",
      benefits: "Comprehensive curriculum, focus on holistic development",
    },
  },
];

const SchoolAffiliation = () => {
  return (
    <Layout>
      <div className="container my-5">
        <h2 className="text-center mb-4">School Affiliations</h2>
        <Accordion>
          {affiliationData.map((affiliation) => (
            <Accordion.Item eventKey={affiliation.id.toString()} key={affiliation.id}>
              <Accordion.Header className="custom-header">
                {affiliation.name}
              </Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <tbody>
                    <tr>
                      <th>Type</th>
                      <td>{affiliation.details.type}</td>
                    </tr>
                    <tr>
                      <th>Level</th>
                      <td>{affiliation.details.level}</td>
                    </tr>
                    <tr>
                      <th>Affiliation Year</th>
                      <td>{affiliation.details.year}</td>
                    </tr>
                    <tr>
                      <th>Benefits</th>
                      <td>{affiliation.details.benefits}</td>
                    </tr>
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

            .accordion-button:focus {
              box-shadow: none;
              border-color: rgba(0,0,0,.125);
            }

            .table {
              margin-bottom: 0;
            }

            .table th {
              width: 150px;
              background-color: #f8f9fa;
            }

            @media (max-width: 768px) {
              .table th {
                width: 120px;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default SchoolAffiliation;