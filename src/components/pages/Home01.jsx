import React from 'react';

import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

import {Banner, Counter, CourseGrid01,CourseCat01,About,CourseGridPopular, Features,Team,Review,Cta}  from '../layouts/home01/index';


const   HomeOne = () => {
    return (
        <div className="home-page">       
            <HeaderOne/>
                <Banner />
                <Counter />
                <CourseGrid01 />
                <CourseCat01 />
                <About />
                <CourseGridPopular />
                <Features />
                <Team />
                <Review />
                <Cta />    
            <FooterOne/>  
        </div>
    )
}

export default HomeOne;