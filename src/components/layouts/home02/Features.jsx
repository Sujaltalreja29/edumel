import React, { Component } from 'react';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: 'fad fa-bullseye',
                    title: 'Our Mission',
                    text: 'To provide a holistic and inclusive education that nurtures academic excellence, critical thinking, and lifelong learning.',
                    extraClassName: 'icon-bg-1',
                },
                {
                    id: 2,
                    icon: 'far fa-eye',
                    title: 'Our Vision',
                    text: 'To be a leading institution that empowers students to become responsible global citizens through innovation and integrity.',
                    extraClassName: 'icon-bg-2',
                },
                {
                    id: 3,
                    icon: 'fa fa-tasks',
                    title: 'Our Goals',
                    text: 'To foster an environment of academic excellence, promote ethical leadership, and cultivate a culture of respect and inclusivity.',
                    extraClassName: 'icon-bg-3',
                },
            ]
        }
    }

    render() {
        return (
            <section className="features-intro">
                <div className="container">
                    <div className="feature-inner">
                        <div className="row">
                            {
                                this.state.features.map((data, i) => (
                                    <div className="col-xl-4 col-lg-4" key={data.id}>
                                        <div className="feature-item feature-style-left">
                                            <div className={`feature-icon ${data.extraClassName}`}>
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
                </div>
            </section>
        );
    }
}

export default Features;
