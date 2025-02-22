import React from 'react';
import { Link } from 'react-router-dom';

const CourseType = ({ data, category }) => {
    return (
        <div className="course-grid course-style-4 bg-white mb-80">
            <div className="course-header">
                <div className="course-thumb">
                    <img 
                        src={data.img} 
                        style={{width: "311.73px", height: "203.65px"}} 
                        alt="Course Thumb" 
                        className="img-fluid"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="course-content">
                <h3 className="course-title">
                    <Link to={process.env.PUBLIC_URL + `/course-details-two/${category}/${data.id}`}>
                        {data.title}
                    </Link>
                </h3>
                <div className="course-meta">
                    <span className="duration">
                        <i className="far fa-user-alt"></i>
                        {data.post}
                    </span>
                    <p>{data.date}</p>
                </div>
            </div>
        </div>
    );
};

export default CourseType;