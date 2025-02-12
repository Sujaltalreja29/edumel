import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-content">
                                <h1>Expand Your Knowledge with Online Learning</h1>
                                <p>The ultimate planning solution for people who want to reach their personal goals Effortless comfortable.</p>
                                
                                {/* <div className="banner-form me-5">
                                    <form action="#" className="form">
                                        <input type="text" className="form-control" placeholder="What do you want to learn?"/>
                                        <Link to="#"> Search<i className="far fa-search"></i></Link>
                                    </form>
                                </div>
                               <div className="category-name">
                                   <span>Popular:</span>
                                   <Link to="#">Design ,</Link>
                                   <Link to="#">Development ,</Link>
                                   <Link to="#">Marketing ,</Link>
                                   <Link to="#">Affiliate</Link>
                               </div> */}
                            </div>
                        </div>
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-img-round mt-5 mt-lg-0">
                            <img src={`https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwc2Nob29sJTIwc3R1ZGVudHN8ZW58MHx8MHx8fDA%3D`} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            

        );
    }
}

export default Banner;

