import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsAndAchievements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsItems: [
                {
                    id: 1,
                    category: 'Academic',
                    date: 'Feb 10, 2025',
                    viewCount: '156',
                    img: 'https://th.bing.com/th/id/OIP.DNAzdEnvi9o_ySVamI8XQgHaD4?w=330&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                    title: 'Students Excel in CBSE Science Olympiad',
                    description: '15 students from classes 9-12 secured top positions at national level'
                },
                {
                    id: 2,
                    category: 'Sports',
                    date: 'Feb 8, 2025',
                    viewCount: '142',
                    img: 'https://th.bing.com/th/id/OIP.iiRzN1cuYlG9XAa9k8C1_QHaFj?w=240&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                    title: 'State Level Cricket Championship Victory',
                    description: 'School cricket team wins state championship for the third consecutive year'
                },
                {
                    id: 3,
                    category: 'Cultural',
                    date: 'Feb 5, 2025',
                    viewCount: '98',
                    img: 'https://th.bing.com/th/id/OIP._ddbb-ur5OiNUHO9G6UPFgHaFP?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                    title: 'Annual Cultural Fest Announced',
                    description: 'Three-day cultural extravaganza featuring dance, music, and art exhibitions'
                },
                {
                    id: 4,
                    category: 'Achievement',
                    date: 'Feb 1, 2025',
                    viewCount: '203',
                    img: 'https://th.bing.com/th/id/OIP.OwziS8--PfAuARrn4cMGHAHaEK?w=323&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
                    title: 'Perfect Score in JEE Advanced',
                    description: 'Riya Sharma of Class 12 achieves perfect score in JEE Advanced 2025'
                }
            ]
        }
    }

    render() {
        return (
            <section className="news-wrapper section-padding bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-heading mb-70 text-center">
                                <h2 className="font-lg">News & Achievements</h2>
                                <p>Celebrating Excellence and Innovation at Our School</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-lg-center">
                        {this.state.newsItems.map((item) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={item.id}>
                                <div className="course-grid tooltip-style bg-white hover-shadow">
                                    <div className="course-header">
                                        <div className="course-thumb">
                                            <img src={item.img} alt={item.title} style={{height : "205.32px"}} className="img-fluid" />
                                            <div className="course-price">{item.category}</div>
                                        </div>
                                    </div>
                    
                                    <div className="course-content">
                                        <div className="rating mb-10">
                                            <i className="far fa-calendar me-2"></i>
                                            <span>{item.date}</span>
                                            <span className="ms-3">
                                                <i className="far fa-eye me-2"></i>
                                                {item.viewCount} views
                                            </span>
                                        </div>

                                        <h3 className="course-title mb-20">
                                            <Link to="#">{item.title}</Link>
                                        </h3>

                                        <p className="mb-20">{item.description}</p>

                                        <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                                            <Link to="#" className="text-decoration-none">
                                                <span className="duration">
                                                    <i className="far fa-arrow-right me-2"></i>Read More
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default NewsAndAchievements;