import React from 'react';
import {  Process, About, Review, Cta ,Features    } from '../layouts/home02/index';
import HeaderTwo from '../../common/header/HeaderTwo';
import HeaderOne from '../../common/header/HeaderOne';
import FooterTwo from '../../common/footer/FooterTwo';
import { CourseCat01 , Counter, Banner ,CourseGridPopular } from '../layouts/home01/index';

const HomeTwo = () => {
    return (
        <div className="home-page-2">       
            <HeaderTwo />  
            <Banner />
            <Counter />
            <div className="section-padding"></div>
            <About />
            <Features />
            
            {/* Adding space between Features and Counter */}
            <div className="section-padding"></div>
            
            <div className=' py-10 top-50'>
            
            </div>
            <CourseGridPopular />
            {/* <Review /> */}
            <CourseCat01 />
            {/* <CourseCat01 /> */}
            
            {/* <Cta /> 
            <Process /> */}
            
            <FooterTwo />
        </div>
    );
}

export default HomeTwo;