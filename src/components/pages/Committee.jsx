import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import Layout from '../../common/Layout';
const StudentCommittee = () => {
  const committeeData = [
    {
      id: 1,
      name: "Student Council",
      members: [
        {
          position: "Head Boy",
          name: "Rahul Kumar",
          class: "XII-A",
          responsibilities: "Overall student body representation"
        },
        {
          position: "Head Girl",
          name: "Priya Singh",
          class: "XII-B",
          responsibilities: "Overall student body representation"
        },
        {
          position: "Sports Captain",
          name: "Arjun Mehta",
          class: "XI-A",
          responsibilities: "Sports activities coordination"
        }
      ]
    },
    {
      id: 2,
      name: "Cultural Committee",
      members: [
        {
          position: "President",
          name: "Ananya Sharma",
          class: "XI-B",
          responsibilities: "Cultural events organization"
        },
        {
          position: "Secretary",
          name: "Rohan Gupta",
          class: "X-A",
          responsibilities: "Event documentation and coordination"
        }
      ]
    },
    {
      id: 3,
      name: "Environmental Club",
      members: [
        {
          position: "Coordinator",
          name: "Neha Patel",
          class: "IX-A",
          responsibilities: "Environmental awareness initiatives"
        },
        {
          position: "Secretary",
          name: "Aditya Verma",
          class: "IX-B",
          responsibilities: "Green campus projects"
        }
      ]
    }
  ];

  return (
    <Layout>
    <div className="container my-5">
      <h2 className="text-center mb-4">Student Committees</h2>
      <p className="text-muted mb-4">Active Committees for Academic Year 2023-24</p>
      
      <Accordion>
        {committeeData.map((committee) => (
          <Accordion.Item eventKey={committee.id.toString()} key={committee.id}>
            <Accordion.Header>{committee.name}</Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Responsibilities</th>
                  </tr>
                </thead>
                <tbody>
                  {committee.members.map((member, idx) => (
                    <tr key={idx}>
                      <td>{member.position}</td>
                      <td>{member.name}</td>
                      <td>{member.class}</td>
                      <td>{member.responsibilities}</td>
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

export default StudentCommittee;