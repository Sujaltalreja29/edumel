import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const olympiad = (page) =>  {
    console.log(page)
    return (
        <div className="Curricular">       
            <Layout>    
                <PageBanner
                    title="Olympiad"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Olympiad"
                    />
                <CourseGrid page="Olympiad"/>
            </Layout>  
        </div>
    );
}
export default olympiad;