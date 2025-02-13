import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseCat01 extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: [
                {
                    id: 1,
                    title: 'Academics & Curriculum',
                    img :  'assets/images/icon/icon1.png',
                    extraClassName: 'bg-1',
                },
                {
                    id: 2,
                    title: 'Co-Curricular Activities',
                    img :  'assets/images/icon/icon2.png',
                    extraClassName: 'bg-2',
                },
                {
                    id: 3,
                    title: 'Sports & Physical Education',
                    img :  'assets/images/icon/icon6.png',
                    extraClassName: 'bg-3',
                },
                {
                    id: 4,
                    title: 'Arts & Music                      ',
                    img :  'assets/images/icon/icon4.png',
                    extraClassName: 'bg-4',
                },
                {
                    id: 5,
                    title: 'Student Counseling & Guidance',
                    img :  'assets/images/icon/icon6.png',
                    extraClassName: 'bg-5',
                },
            ]
        }
    }

    render() {
        return (      
            <section className="course-category-3 section-padding">
                <div className="container">
                    <div className="row mb-70 justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-heading text-center">
                                <h2 className="font-lg">Programs Offered by Our School</h2>
                                <p>We provide a wide range of services to ensure holistic development of our students.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                             this.state.category.map((data,i)=> (
                                 <div className="col-xl col-lg-4 col-sm-6" key={data.id}>
                                    <div className={`single-course-category style-3 ${data.extraClassName}`} style={{height : "248px"}}> 
                                        <div className="course-cat-icon">
                                            <img src={data.img} alt="" className="img-fluid"/>
                                        </div>

                                        <div className="course-cat-content">
                                            <h4 className="course-cat-title">
                                                <Link to="#">{data.title}</Link>
                                            </h4>
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
export default CourseCat01;
