import React, { Component } from 'react';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: 'fa fa-video',
                    title: 'Online Classes',
                    extraClassName: 'icon-bg-3',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam nulla inventore dolores fuga'
                },
                {
                    id: 2,
                    icon: 'far fa-file-certificate',
                    title: 'Get certificate',
                    extraClassName: 'icon-bg-2',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam nulla inventore dolores fuga'
                },
                {
                    id: 3,
                    icon: 'fad fa-users',
                    title: 'Life Time Support',
                    extraClassName: 'icon-bg-1',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem veniam nulla inventore dolores fuga'
                },
                
            ]
        }
    }
    render() {
        return (
            <section className="about-3 section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-img">
                                <img src="assets/images/infrastructure/banner.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content mt-5 mt-lg-0">
                                <div className="heading mb-50">
                                    <span className="subheading">10 years Glory of success</span>
                                    <h2 className="font-lg">Some reasons why Start Your Learning with Us</h2>
                                </div>

                                <div className="about-features">
                                {
                                    this.state.features.map((data,i) =>(

                                        <div className="feature-item feature-style-left" key={data.id}>
                                            <div className={`feature-icon icon-radius ${data.extraClassName}`}>
                                                <i className={data.icon}></i>
                                            </div>
                                            <div className="feature-text">
                                                <h4>{data.title}</h4>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    ))
                                    
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
     
        );
    }
}

export default About;
