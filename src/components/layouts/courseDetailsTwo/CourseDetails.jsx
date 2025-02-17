import React, { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import FsLightbox from 'fslightbox-react';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import CourseData from '../../../data/course/CourseData.json';

import InstructorData from '../../../data/instructor/InstructorData.json';
import CurriculumTabContent from '../../../data/course/CurriculumTabContent.json';

import { slugify } from '../../../utils/index';

import { activityData, schoolActivities, achievements, sports, communityService, olympiad, cbseActivities } from '../../../data/course/data.js';


const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey);
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={isCurrentEventKey ? true : false} className="edu-accordion-button">{children}</button>
}

const CurriculumContent = () => {
    const [activeId, setActiveId] = useState('0');

    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (
        <Accordion bsPrefix="edu-accordion-02" defaultActiveKey={activeId} flush>
            {
                CurriculumTabContent.map((accordion, i) => (
                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'bg-active' : ''}`}>
                        <div className="edu-accordion-header">
                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                        </div>
                        <Accordion.Body bsPrefix="edu-accordion-body">
                            <ul>
                                {
                                    accordion.content.map((title, index) => (
                                        <li key={index}>
                                            <div className="text"><i className="ri-draft-line"></i>{title}</div>
                                            <div className="icon"><i className="ri-lock-password-line"></i></div>
                                        </li>
                                    ))

                                }
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    )
}


const CourseDetails = () => {

    const { id } = useParams();
    const courseId = parseInt(id, 10);
    const data = activityData.filter(course => course.id === courseId);
    const courseItem = data[0];
    console.log(courseItem)
    // const instructor = InstructorData[indexOfInstructor];

    // const instructorThumb = InstructorData[indexOfInstructor].image;

    // const instructorExcerpt = instructor.details.substring(0, 190) + "...";

    const [contentTab, setContentTab] = useState('overview');
    const handleTab = (content) => {
        if (content === 'overview') {
            setContentTab('overview');
        } else if (content === 'curriculum') {
            setContentTab('curriculum');
        } else if (content === 'instructor') {
            setContentTab('instructor');
        } else if (content === 'reviews') {
            setContentTab('reviews');
        }
    }

    const [toggler, setToggler] = useState(false);


    return (
        <>
            <section className="course-page-header page-header-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-xl-7">
                            <div className="course-header-wrapper mb-0 bg-transparent">
                                <h1 className="mb-3">{courseItem.title}</h1>
                                <p>{courseItem.post}</p>
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="video-area">
                                <div className="thumbnail video-popup-wrapper course-thumbnail">
                                    <img className="radius-small w-100" src={courseItem.img} alt="Course Video Thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="tutori-course-single tutori-course-layout-3 page-wrapper">

                <div className="tutori-course-content ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-15 col-xl-15">
                                <nav className="course-single-tabs learn-press-nav-tabs">
                                    <ul className="nav nav-tabs course-nav" role="tablist">
                                        <li className="nav-item">
                                            <a
                                                className={contentTab === 'overview' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Overview"
                                                onClick={() => handleTab('overview')}
                                            >
                                                Overview
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={contentTab === 'reviews' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Reviews"
                                                onClick={() => handleTab('reviews')}
                                            >
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <div className="tab-content tutori-course-content">
                                    {/* Overview Tab */}
                                    {contentTab === 'overview' &&
                                        <div className={`tab-pane fade show ${contentTab === 'overview' ? 'active' : ''} `}>
                                            <div className="single-course-details ">
                                                Course Description
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.

                                                What You’ll Learn From This Course
                                                Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
                                                Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam maer
                                                Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac
                                                Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis
                                                Certification
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                                            </div>
                                        </div>
                                    }

                                    {/*  Review TAb */}

                                    {contentTab === 'reviews' &&
                                        <div className={`tab-pane fade show ${contentTab === 'reviews' ? 'active' : ''} `}>
                                            <div className="course-tab-content">
                                                <div id="course-reviews">
                                                    <ul className="course-reviews-list">
                                                        <li>
                                                            <div className="course-review">
                                                                <div className="course-single-review">
                                                                    <div className="user-content user-review-content">
                                                                        <div className="review-header mb-10">
                                                                            <h4 className="user-name">Tutori</h4>

                                                                            <div className="rating review-stars-rated">
                                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                                <a href="#"><i className="fa fa-star"></i></a>
                                                                                <a href="#"><i className="fa fa-star-half"></i></a>
                                                                            </div>
                                                                        </div>

                                                                        <div className="review-text">
                                                                            <div className="review-content">
                                                                                {courseItem.reviewText}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default CourseDetails;