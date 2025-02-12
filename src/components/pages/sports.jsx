import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const sports = (page) =>  {
    console.log(page)
    return (
        <div className="Curricular">       
            <Layout>    
                <PageBanner
                    title="Sports"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Sports"
                    />
                <CourseGrid page="Sports"/>
            </Layout>  
        </div>
    );
}
export default sports;