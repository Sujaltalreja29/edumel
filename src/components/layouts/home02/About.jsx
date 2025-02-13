import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {

    render() {
        return (
            <section className="be-instructor section-padding-btm">
                <div>
                    <div className="p-5 m-5 row align-items-center justify-between">
                        <div className=" col-xl-5 col-lg-5 mb-5 mb-lg-0 me-5" style={{marginLeft: "80px"}}>
                            <img src={`https://cathedral-school.com/wp-content/uploads/2016/05/P-1b.jpg`} alt="" className="img-fluid" />
                        </div>

                        <div className="col-xl-5 col-lg-5">
                            <div className="section-heading mt-5 mt-lg-5">
                                <span className="subheading">Principal's Message</span>
                                <h2 className="font-lg mb-20">Become an instructor</h2>
                                <p className="mb-20">
                                    Do you want to be an instructor? Do you want to share your knowledge with everyone? If you have any skill then you can easily
                                    share your knowledge online or offline through iLive platform & make money.
                                </p>
                                <p className="mb-30">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit adipisci corporis soluta facilis eum facere nisi dolorem quisquam amet deleniti!
                                </p>

                                <Link to="#" className="btn btn-main rounded">Start Teaching today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        );
    }
}

export default About;
