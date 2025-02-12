import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'flaticon-teacher',
                    title: 'Our Mission',
                    text: 'To provide holistic education that nurtures creativity, critical thinking, and strong moral values among students, preparing them for a successful future.'
                },
                {
                    id: 2,
                    icon: 'flaticon-layer',
                    title: 'Our Vision',
                    text: 'To be a leading institution that fosters academic excellence, personal growth, and a sense of responsibility towards society and the nation.'
                }
            ]
        }
    }

    render() {
        return (
            <section >
                <div>
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div className="section-heading mb-50 text-center">
                                <h2 className="font-lg">Our Mission & Vision</h2>
                                <p>Empowering students with knowledge, values, and skills for a brighter future.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        {
                            this.state.features.map((data,i) =>(
                                <div className="col-lg-4 col-md-4 col-xl-6 col-sm-12" key={data.id}>
                                    <div className="feature-item feature-style-top hover-shadow rounded border-0">
                                        <div className="feature-icon">
                                            <i className={data.icon}></i>
                                        </div>
                                        <div className="feature-text">
                                            <h4>{data.title}</h4>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;
