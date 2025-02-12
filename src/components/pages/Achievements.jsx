import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const Achievements = (page) =>  {
    console.log(page)
    return (
        <div className="Curricular">       
            <Layout>    
                <PageBanner
                    title="Achievements"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Achievements"
                    />
                <CourseGrid page="Achievements"/>
            </Layout>  
        </div>
    );
}
export default Achievements;