import {Team}  from '../layouts/about/index';
import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/blog/index';

const SchoolInfrastructure = () => {
    const infrastructureData = [
        {
            id: 1,
            category: "Academic Facilities",
            details: [
                {
                    facility: "Classrooms",
                    area: "25,000 sq ft",
                    capacity: "30 students per class",
                    features: "Smart boards, AC, Modern furniture"
                },
                {
                    facility: "Science Labs",
                    area: "10,000 sq ft",
                    capacity: "40 students per lab",
                    features: "Physics, Chemistry, Biology labs with latest equipment"
                },
                {
                    facility: "Computer Labs",
                    area: "5,000 sq ft",
                    capacity: "50 workstations",
                    features: "High-speed internet, Latest hardware & software"
                },
                {
                    facility: "Library",
                    area: "15,000 sq ft",
                    capacity: "200 students",
                    features: "20,000+ books, Digital resources, Study areas"
                }
            ]
        },
        {
            id: 2,
            category: "Sports Facilities",
            details: [
                {
                    facility: "Indoor Sports Complex",
                    area: "20,000 sq ft",
                    capacity: "Multiple games simultaneously",
                    features: "Badminton, Basketball, Table Tennis"
                },
                {
                    facility: "Swimming Pool",
                    area: "8,000 sq ft",
                    capacity: "25m Olympic-style pool",
                    features: "Heated pool, Training lanes, Kids pool"
                },
                {
                    facility: "Football Ground",
                    area: "40,000 sq ft",
                    capacity: "FIFA standard field",
                    features: "Natural grass, Flood lights, Spectator stands"
                },
                {
                    facility: "Cricket Ground",
                    area: "50,000 sq ft",
                    capacity: "Standard pitch",
                    features: "Practice nets, Pavilion"
                }
            ]
        },
        {
            id: 3,
            category: "Additional Facilities",
            details: [
                {
                    facility: "Auditorium",
                    area: "12,000 sq ft",
                    capacity: "1000 seats",
                    features: "Advanced AV system, Green room, Stage lighting"
                },
                {
                    facility: "Cafeteria",
                    area: "6,000 sq ft",
                    capacity: "300 students",
                    features: "Hygienic kitchen, Multiple food stations"
                },
                {
                    facility: "Medical Center",
                    area: "2,000 sq ft",
                    capacity: "10 beds",
                    features: "Full-time doctor, First aid, Ambulance service"
                },
                {
                    facility: "Transport Hub",
                    area: "4,000 sq ft",
                    capacity: "30 buses",
                    features: "GPS tracking, AC buses, Trained staff"
                }
            ]
        }
    ];

    return (
        <Layout>
            <PageBanner
                title="School Infrastructure"
                rootUrl="/"
                parentUrl="Home"
                currentUrl="Campus"
            />
            
            <div className="container my-5">
                <div className="max-w-4xl mx-auto p-6">
                    <section className="mb-6">
                        <h2 className="text-3xl font-bold mb-4 text-center">Our World-Class Campus</h2>
                        <p className="text-gray-700 mb-5">
                            Welcome to our state-of-the-art campus spread across 10 acres of lush green environment. 
                            Our infrastructure is thoughtfully designed to provide an optimal learning environment 
                            while maintaining a perfect balance between academic and recreational facilities. 
                            The campus features modern architecture that seamlessly blends with nature, creating 
                            an inspiring atmosphere for students to learn and grow.
                        </p>
                    </section>

                    <Team/>

                    <section className="my-5">
                        <h2 className="text-2xl font-semibold mb-4">Detailed Infrastructure Information</h2>
                        <Accordion>
                            {infrastructureData.map((section) => (
                                <Accordion.Item eventKey={section.id.toString()} key={section.id}>
                                    <Accordion.Header>{section.category}</Accordion.Header>
                                    <Accordion.Body>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Facility</th>
                                                    <th>Area</th>
                                                    <th>Capacity</th>
                                                    <th>Features</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {section.details.map((detail, idx) => (
                                                    <tr key={idx}>
                                                        <td>{detail.facility}</td>
                                                        <td>{detail.area}</td>
                                                        <td>{detail.capacity}</td>
                                                        <td>{detail.features}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </section>
                </div>
            </div>

            <style>
                {`
                    .accordion-button {
                        color: #015ABD;
                        background-color: #fff;
                        font-weight: 500;
                    }

                    .accordion-button:not(.collapsed) {
                        color: #015ABD;
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
        </Layout>
    );
};

export default SchoolInfrastructure;