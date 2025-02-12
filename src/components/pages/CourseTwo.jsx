import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const CourseTwo = (page) =>  {
    console.log(page)
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Course Style - 2"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 2"
                    />
                <CourseGrid page="School"/>
            </Layout>  
        </div>
    );
}
export default CourseTwo;