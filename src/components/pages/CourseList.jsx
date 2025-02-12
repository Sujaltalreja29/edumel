import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/courseList/index';

import Layout from '../../common/Layout';

const CourseList = () => {
    return (
        <div className="course-page">       
            <Layout>       
                    <PageBanner
                        title="Course Style - List"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Course Style - List"
                        />
                    <CourseGrid />
            </Layout>
        </div>
    );
}

export default CourseList;