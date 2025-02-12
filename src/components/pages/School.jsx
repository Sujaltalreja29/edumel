import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const School = (page) =>  {
    console.log(page)
    return (
        <div className="Curricular">       
            <Layout>    
                <PageBanner
                    title="School Activities"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="school"
                    />
                <CourseGrid page="School"/>
            </Layout>  
        </div>
    );
}
export default School;