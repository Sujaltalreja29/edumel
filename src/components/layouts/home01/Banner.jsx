import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
        <section className="banner-style-4 banner-padding">
            <div class="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <div className="banner-content ">
                            <span className="subheading">Over 3000 Course Available</span>
                            <h1>Distance education for wider opportunities</h1>
                            <p className="mb-40"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis 
                                quam ipsa blanditiis, facilis velit eaque illo?</p>

                            <div className="btn-container">
                                <Link to="#" className="btn btn-main rounded">Find Courses</Link>
                                <Link to="#" className="btn btn-white rounded ms-2">Get started </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <div className="banner-img-round mt-5 mt-lg-0 ps-5">
                            <img src={`https://imgs.search.brave.com/f8VKSm3p684466L6K0bo8cJNckOkLNjZgj_ZLdUWk1w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzAzLzYxLzk1/LzM2MF9GXzEwMDM2/MTk1OTNfdEhvSDQy/akxWelh5RjN5Um5X/OTRsbDU4UTdhclgx/TUkuanBn`} alt="" className="img-fluid" style={{    marginLeft: "-15px"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Banner;

