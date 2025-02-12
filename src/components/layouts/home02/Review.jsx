import React, { Component } from 'react';
import Slider from "react-slick";
import { HomeTwoTestimonial } from '../../../utils/script';

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            achievements: [
                {
                    id: 1,
                    text: 'Our school has been ranked among the top 10 CBSE schools in the region for academic excellence.',
                },
                {
                    id: 2,
                    text: 'Congratulations to our students for winning the National Science Olympiad with top honors.',
                },
                {
                    id: 3,
                    text: 'Our football team secured the championship title at the State Level Inter-School Tournament.',
                },
                {
                    id: 4,
                    text: 'Proud moment! Our students bagged the first prize in the National Robotics Competition.',
                },
                {
                    id: 5,
                    text: 'Three of our students have been selected for the prestigious IIT JEE Advanced program.',
                },
            ]
        }
    }

    render() {
        return (
            <section className="testimonial section-padding">
                <div className="container-fluid container-grid">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading text-center mb-50">
                                <span className="subheading">News & Achievements</span>
                                <h2 className="font-lg">Latest Updates from Our School</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-12">
                            <div className="testimonials-slides-3">
                                <Slider {...HomeTwoTestimonial}>
                                    {
                                        this.state.achievements.map((data) => (
                                            <div className="testimonial-item" key={data.id}>
                                                <div className="testimonial-inner">
                                                    <div className="quote-icon"><i className="flaticon-left-quote"></i></div>
                                                    <div className="testimonial-text mb-30">
                                                        {data.text}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Review;
