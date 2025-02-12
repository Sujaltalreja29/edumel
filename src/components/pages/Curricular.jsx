import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const Curricular = (page) =>  {
    console.log(page)
    return (
        <div className="Curricular">       
            <Layout>    
                <PageBanner
                    title="Co-Curricular"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="curricular"
                    />
                <CourseGrid page="Curricular"/>
            </Layout>  
        </div>
    );
}
export default Curricular;