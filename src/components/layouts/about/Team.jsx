import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Infrastructure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            facilities: [
                {
                    id: 1,
                    img: 'assets/images/infrastructure/library.png',
                    title: 'Modern Library',
                    text: 'Reading Hub',
                    capacity: '10,000',
                    fb: 'far fa-building',
                    twitter: 'fas fa-book-reader',
                    linkedin: 'fas fa-wifi',
                },
                {
                    id: 2,
                    img: 'assets/images/infrastructure/sports.png',
                    title: 'Sports Complex',
                    text: 'Recreation Center',
                    capacity: '500',
                    fb: 'fas fa-running',
                    twitter: 'fas fa-basketball-ball',
                    linkedin: 'fas fa-swimming-pool',
                },
                {
                    id: 3,
                    img: 'assets/images/infrastructure/labs.png',
                    title: 'Science Labs',
                    text: 'Research Center',
                    capacity: '200',
                    fb: 'fas fa-flask',
                    twitter: 'fas fa-microscope',
                    linkedin: 'fas fa-atom',
                },
                {
                    id: 4,
                    img: 'assets/images/infrastructure/audi.png',
                    title: 'Auditorium',
                    text: 'Event Space',
                    capacity: '1000',
                    fb: 'fas fa-theater-masks',
                    twitter: 'fas fa-music',
                    linkedin: 'fas fa-microphone',
                },
            ]
        }
    }

    render() {
        return (
            <section className="instructors section-padding-btm">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 pe-5">
                            <div className="section-heading">
                                <span className="subheading">World-Class Facilities</span>
                                <h2 className="font-lg mb-20">Our Infrastructure</h2>
                                <p className="mb-30">
                                    Our school provides state-of-the-art infrastructure and facilities 
                                    to ensure a conducive learning environment. From modern classrooms 
                                    to advanced laboratories, we offer everything needed for holistic education.
                                </p>

                                <ul className="list-item mb-40">
                                    <li>
                                        <i className="fa fa-check"></i>
                                        <h5>Modern classrooms equipped with smart learning tools</h5>
                                    </li>
                                    <li>
                                        <i className="fa fa-check"></i>
                                        <h5>Well-equipped laboratories for practical learning</h5>
                                    </li>
                                    <li>
                                        <i className="fa fa-check"></i>
                                        <h5>Extensive sports facilities for physical development</h5>
                                    </li>
                                </ul>
                                <a href="#" className="btn btn-main rounded">Schedule a Visit</a>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="row masonary-item">
                                {this.state.facilities.map((data, i) => (
                                    <div className="col-lg-6 col-md-6 col-sm-6" key={data.id}>
                                        <div className="team-item team-item-2">
                                            <div className="team-img">
                                                <img src={data.img} alt="" className="img-fluid" />

                                                <ul className="team-socials list-inline">
                                                    <li className="list-inline-item">
                                                        <Link to="#"><i className={data.fb}></i></Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#"><i className={data.twitter}></i></Link>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <Link to="#"><i className={data.linkedin}></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="team-content">
                                                <div className="team-info">
                                                    <h4>{data.title}</h4>
                                                    <p>{data.text}</p>
                                                </div>

                                                <div className="course-meta">
                                                    <span className="duration">
                                                        <i className="far fa-user-alt"></i>
                                                        Capacity: {data.capacity}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Infrastructure;