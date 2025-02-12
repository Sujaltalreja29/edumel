import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const community = (page) =>  {
    console.log(page)
    return (
        <div className="Curricular">       
            <Layout>    
                <PageBanner
                    title="Community"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Community"
                    />
                <CourseGrid page="Community"/>
            </Layout>  
        </div>
    );
}
export default community;